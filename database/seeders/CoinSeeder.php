<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Coin;

class CoinSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $coins = [
            [
                'name' => 'BEP20-USDT',
                'symbol' => 'BEP20-USDT',
                'icon' => 'BEP20-USDT.webp',
                'status' => 'active',
            ],
            [
                'name' => 'BNB',
                'symbol' => 'BNB',
                'icon' => 'BNB.webp',
                'status' => 'active',
            ],
            [
                'name' => 'BEP20-USDC',
                'symbol' => 'BEP20-USDC',
                'icon' => 'BEP20-USDC.webp',
                'status' => 'active',
            ],
            [
                'name' => 'POLYGON-USDC',
                'symbol' => 'POLYGON-USDC',
                'icon' => 'POLYGON-USDC.webp',
                'status' => 'active',
            ],
            [
                'name' => 'POLYGON-USDT',
                'symbol' => 'POLYGON-USDT',
                'icon' => 'POLYGON-USDT.webp',
                'status' => 'active',
            ],
            [
                'name' => 'ETH-USDC',
                'symbol' => 'ETH-USDC',
                'icon' => 'ETH-USDC.webp',
                'status' => 'active',
            ],
            [
                'name' => 'ETH-USDT',
                'symbol' => 'ETH-USDT',
                'icon' => 'ETH-USDT.webp',
                'status' => 'active',
            ],
            [
                'name' => 'TRX',
                'symbol' => 'TRX',
                'icon' => 'TRX.webp',
                'status' => 'active',
            ],
            [
                'name' => 'TRC20-USDT',
                'symbol' => 'TRC20-USDT',
                'icon' => 'TRC20-USDT.webp',
                'status' => 'active',
            ],
            [
                'name' => 'SEPOLIA',
                'symbol' => 'SEPOLIA',
                'icon' => 'SEPOLIA.webp',
                'status' => 'active',
            ],
        ];

        foreach ($coins as $coin) {
            Coin::create($coin);
        }
    }
}
