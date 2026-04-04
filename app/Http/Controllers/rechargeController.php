<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;
use App\Models\Deposit;

class rechargeController extends Controller
{
    private $etherscanKey;
    private $trongridKey;

    public function __construct()
    {
        $this->etherscanKey = env('ETHERSCAN_API_KEY', '');
        $this->trongridKey = env('TRONGRID_API_KEY', '');
    }

    public function getIncomingTransactions(Request $request)
    {
        $network = $request->network;
        $address = $request->address;
        
        $count = 0;

        try {
            if (in_array($network, ['BNB', 'BEP20-USDT', 'BEP20-USDC'])) {
                $count = $this->binanceSmartChain($network, $address);
            } elseif (in_array($network, ['POLYGON-USDT', 'POLYGON-USDC'])) {
                $count = $this->polygon($network, $address);
            } elseif (in_array($network, ['ETH-USDT', 'ETH-USDC'])) {
                $count = $this->ethereum($network, $address);
            } elseif (in_array($network, ['TRX', 'TRC20-USDT'])) {
                $count = $this->tron($network, $address);
            } elseif ($network === 'SEPOLIA') {
                $count = $this->sepolia($network, $address);
            }
        } catch (\Exception $e) {
            Log::error('Recharge Error: ' . $e->getMessage());
            return back()->with('error', 'API Error: Please contact support.');
        }

        if ($count > 0) {
            return redirect()->route('account.balance')->with('success', "Found $count new deposit(s)! Your balance has been updated.");
        }

        return back()->with('error', 'No new deposit found. Please wait a few minutes and try again.');
    }

    private function processEVM($chainId, $network, $address, $validContracts = [])
    {
        $count = 0;
        
        // Is it native coin? (BNB or ETH or SEPOLIA)
        $isNative = in_array($network, ['BNB', 'ETH', 'SEPOLIA']); 
        $action = $isNative ? 'txlist' : 'tokentx';

        // Etherscan V2 Multichain API (Supports BSC, Polygon, etc through chainid parameter)
        $url = "https://api.etherscan.io/v2/api?chainid={$chainId}&module=account&action={$action}&address={$address}&page=1&offset=50&sort=desc&apikey={$this->etherscanKey}";
        
        $response = Http::get($url);
        
        if (!$response->successful() || $response['status'] !== '1') {
            return 0; // API error or no transactions
        }

        $transactions = $response['result'];

        foreach ($transactions as $tx) {
            // Check direction: must be incoming TO our address
            if (strtolower($tx['to']) !== strtolower($address)) {
                continue;
            }

            // Check TxReceipt Status if available (must not be failed)
            if (isset($tx['isError']) && $tx['isError'] === '1') {
                continue;
            }

            // If token, verify contract address to avoid fake tokens
            if (!$isNative && count($validContracts) > 0) {
                if (!in_array(strtolower($tx['contractAddress']), array_map('strtolower', $validContracts))) {
                    continue; 
                }
            }

            // Decimal calculation
            $decimals = isset($tx['tokenDecimal']) ? (int)$tx['tokenDecimal'] : 18;
            $amount = floatval($tx['value']) / pow(10, $decimals);

            if ($amount <= 0) continue;

            $txHash = $tx['hash'];

            // Register Deposit
            $count += $this->registerDeposit($txHash, $amount, $network);
        }

        return $count;
    }

    public function binanceSmartChain($network, $address)
    {
        $contracts = [];
        
        if ($network === 'BEP20-USDT') {
            // USDT contract on BSC
            $contracts[] = '0x55d398326f99059ff775485246999027b3197955';
        } elseif ($network === 'BEP20-USDC') {
            // USDC contract on BSC
            $contracts[] = '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d';
        }

        return $this->processEVM(56, $network, $address, $contracts);
    }

    public function polygon($network, $address)
    {
        $contracts = [];
        
        if ($network === 'POLYGON-USDT') {
            // USDT contract on Polygon
            $contracts[] = '0xc2132d05d31c914a87c6611c10748aeb04b58e8f';
        } elseif ($network === 'POLYGON-USDC') {
            // USDC contract on Polygon (Bridged & Native)
            $contracts[] = '0x2791bca1f2de4661ed88a30c99a7a9449aa84174'; 
            $contracts[] = '0x3c499c542cef5e3811e1192ce70d8cc03d5c3359'; 
        }

        return $this->processEVM(137, $network, $address, $contracts);
    }

    public function sepolia($network, $address)
    {
        return $this->processEVM(11155111, $network, $address);
    }

    public function ethereum($network, $address)
    {
        $contracts = [];
        
        if ($network === 'ETH-USDT') {
            // USDT contract on Ethereum
            $contracts[] = '0xdac17f958d2ee523a2206206994597c13d831ec7';
        } elseif ($network === 'ETH-USDC') {
            // USDC contract on Ethereum
            $contracts[] = '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48';
        }

        return $this->processEVM(1, $network, $address, $contracts);
    }

    public function tron($network, $address)
    {
        $count = 0;
        $isNative = ($network === 'TRX');
        
        // TronGrid API 
        $url = $isNative 
            ? "https://api.trongrid.io/v1/accounts/".urlencode($address)."/transactions?only_to=true&limit=50"
            : "https://api.trongrid.io/v1/accounts/".urlencode($address)."/transactions/trc20?contract_address=TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t&only_to=true&limit=50";

        $headers = [];
        if (!empty($this->trongridKey)) {
            $headers['TRON-Pro-Api-Key'] = $this->trongridKey;
        }

        $response = Http::withHeaders($headers)->get($url);

        if (!$response->successful() || !isset($response['data'])) {
            return 0;
        }

        foreach ($response['data'] as $tx) {
            if ($isNative) {
                // Must be 'SUCCESS'
                if (isset($tx['ret'][0]['contractRet']) && $tx['ret'][0]['contractRet'] !== 'SUCCESS') {
                    continue;
                }
                if (isset($tx['raw_data']['contract'][0]['type']) && $tx['raw_data']['contract'][0]['type'] === 'TransferContract') {
                    $contractData = $tx['raw_data']['contract'][0]['parameter']['value'];
                    
                    // Convert SUN to TRX
                    $amount = floatval($contractData['amount']) / 1000000;
                    $txHash = $tx['txID'];
                    
                    if ($amount > 0) {
                        /* Note: We rely on the only_to=true filter in the TronGrid API request. 
                           Manual Base58 vs Hex comparison is avoided to prevent logic errors. */
                        $count += $this->registerDeposit($txHash, $amount, $network);
                    }
                }
            } else {
                $decimals = isset($tx['token_info']['decimals']) ? (int)$tx['token_info']['decimals'] : 6;
                $amount = floatval($tx['value']) / pow(10, $decimals);
                $txHash = $tx['transaction_id'];

                if ($amount > 0 && strtolower($tx['to'] ?? '') === strtolower($address)) {
                    $count += $this->registerDeposit($txHash, $amount, $network);
                }
            }
        }

        return $count;
    }

    private function registerDeposit($txHash, $amount, $network)
    {
        $user = Auth::user();

        // Convert amount to USDT if not already USDT/USDC
        $amountInUsdt = $this->convertToUsdt($amount, $network);

        return DB::transaction(function () use ($txHash, $amountInUsdt, $user) {
            // Lock or check
            $exists = Deposit::where('trx', $txHash)->lockForUpdate()->exists();

            if ($exists) {
                return 0; // Already added
            }

            // Create deposit
            Deposit::create([
                'user_id' => $user->id,
                'amount' => $amountInUsdt,
                'trx' => $txHash,
                'status' => 'success',
            ]);

            // Add amount to user's balance
            $user->increment('balance', $amountInUsdt);

            return 1;
        });
    }

    public function convertToUsdt($amount, $network)
    {
        $network = strtoupper($network);

        // If it's already a stablecoin (USDT or USDC)
        if (str_contains($network, 'USDT') || str_contains($network, 'USDC')) {
            return $amount;
        }

        // Map network to Binance symbol
        $symbol = '';
        if ($network === 'BNB') {
            $symbol = 'BNBUSDT';
        } elseif (in_array($network, ['ETH', 'SEPOLIA'])) {
            $symbol = 'ETHUSDT';
        } elseif ($network === 'TRX') {
            $symbol = 'TRXUSDT';
        }

        if ($symbol) {
            try {
                $response = Http::get("https://api.binance.com/api/v3/ticker/price?symbol={$symbol}");
                if ($response->successful() && isset($response['price'])) {
                    $price = floatval($response['price']);
                    return $amount * $price;
                }
            } catch (\Exception $e) {
                Log::error("Binance API Error for {$symbol}: " . $e->getMessage());
            }
        }

        return $amount;
    }
}
