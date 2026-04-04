import { useState } from 'react';
import { router, usePage } from '@inertiajs/react';
import AccountLayout from '../../Layouts/AccountLayout';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SavingsIcon from '@mui/icons-material/Savings';

export default function TransferProfit({ balance, profit_balance }) {
    const [amount, setAmount] = useState('');
    const [loading, setLoading] = useState(false);
    const { flash } = usePage().props;

    const quickPercentages = [25, 50, 75, 100];

    const handleQuickSelect = (pct) => {
        const val = ((profit_balance * pct) / 100).toFixed(2);
        setAmount(val);
    };

    const handleTransfer = () => {
        if (!amount || parseFloat(amount) <= 0) {
            alert('Please enter a valid amount');
            return;
        }
        if (parseFloat(amount) > profit_balance) {
            alert('Amount exceeds your profit balance');
            return;
        }

        setLoading(true);
        router.post('/account/transfer-profit', { amount }, {
            preserveScroll: true,
            onSuccess: (page) => {
                const flash = page.props.flash;
                if (flash?.success) alert(flash.success);
                if (flash?.error) alert(flash.error);
                setAmount('');
            },
            onError: (errors) => {
                alert(Object.values(errors)[0] || 'Transfer failed');
            },
            onFinish: () => setLoading(false),
        });
    };

    return (
        <div className="px-4 pb-20 pt-5">
            <div className="flex flex-col items-center gap-5">

                {/* Balance Cards */}
                <div className="w-full grid grid-cols-2 gap-3">
                    {/* Profit Balance Card */}
                    <div className="bg-linear-to-br from-amber-500 to-orange-600 rounded-2xl p-4 text-white shadow-lg">
                        <div className="flex items-center gap-2 mb-2">
                            <SavingsIcon sx={{ fontSize: 18 }} />
                            <span className="text-xs font-medium opacity-90">Profit Balance</span>
                        </div>
                        <p className="text-xl font-bold">{Number(profit_balance).toFixed(2)}</p>
                        <p className="text-[10px] opacity-70 mt-1">USDT</p>
                    </div>

                    {/* Main Balance Card */}
                    <div className="bg-linear-to-br from-green-600 to-green-800 rounded-2xl p-4 text-white shadow-lg">
                        <div className="flex items-center gap-2 mb-2">
                            <AccountBalanceWalletIcon sx={{ fontSize: 18 }} />
                            <span className="text-xs font-medium opacity-90">Main Balance</span>
                        </div>
                        <p className="text-xl font-bold">{Number(balance).toFixed(2)}</p>
                        <p className="text-[10px] opacity-70 mt-1">USDT</p>
                    </div>
                </div>

                {/* Transfer Direction Visual */}
                <div className="flex items-center gap-3 text-sm text-gray-500">
                    <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-medium">Profit</span>
                    <SwapHorizIcon sx={{ fontSize: 22 }} className="text-gray-400" />
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">Main</span>
                </div>

                {/* Transfer Form */}
                <div className="w-full bg-white rounded-2xl px-6 py-6 shadow-sm">
                    <h3 className="text-sm font-semibold text-gray-800 mb-4">Transfer Amount</h3>

                    {/* Amount Input */}
                    <div className="relative mb-4">
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder="0.00"
                            min="0.01"
                            max={profit_balance}
                            step="0.01"
                            className="w-full bg-gray-100 border border-gray-200 rounded-xl px-4 py-3 text-lg font-semibold text-gray-800 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all"
                        />
                        <button
                            onClick={() => setAmount(Number(profit_balance).toFixed(2))}
                            className="absolute right-3 top-1/2 -translate-y-1/2 bg-green-600 text-white text-[10px] px-3 py-1 rounded-full font-bold uppercase hover:bg-green-700 transition-colors"
                        >
                            MAX
                        </button>
                    </div>

                    {/* Quick Amount Buttons */}
                    <div className="grid grid-cols-4 gap-2 mb-6">
                        {quickPercentages.map((pct) => (
                            <button
                                key={pct}
                                onClick={() => handleQuickSelect(pct)}
                                className="bg-gray-100 hover:bg-green-50 border border-gray-200 hover:border-green-400 text-gray-700 hover:text-green-700 text-sm py-2 rounded-lg transition-all font-medium"
                            >
                                {pct}%
                            </button>
                        ))}
                    </div>

                    {/* Summary */}
                    <div className="bg-gray-50 rounded-xl p-4 mb-5 space-y-2">
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Transfer amount</span>
                            <span className="font-medium">{amount ? Number(amount).toFixed(2) : '0.00'} USDT</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Fee</span>
                            <span className="font-medium text-green-600">Free</span>
                        </div>
                        <div className="border-t border-gray-200 pt-2 flex justify-between text-sm">
                            <span className="text-gray-500">You will receive</span>
                            <span className="font-semibold text-green-700">{amount ? Number(amount).toFixed(2) : '0.00'} USDT</span>
                        </div>
                    </div>

                    {/* Confirm Button */}
                    <button
                        onClick={handleTransfer}
                        disabled={loading || !amount || parseFloat(amount) <= 0 || parseFloat(amount) > profit_balance}
                        className={`w-full py-3 rounded-full font-semibold text-sm transition-all ${
                            loading || !amount || parseFloat(amount) <= 0 || parseFloat(amount) > profit_balance
                                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                : 'bg-green-600 hover:bg-green-700 text-white active:scale-[0.98] shadow-lg shadow-green-600/30'
                        }`}
                    >
                        {loading ? 'Processing...' : 'Confirm Transfer'}
                    </button>
                </div>

                {/* Info Note */}
                <div className="w-full bg-amber-50 border border-amber-200 rounded-xl px-4 py-3">
                    <p className="text-xs text-amber-700 leading-relaxed">
                        💡 Transfer your profit earnings to your main balance to make withdrawals. Transfers are instant and free of charge.
                    </p>
                </div>
            </div>
        </div>
    );
}

TransferProfit.layout = (page) => <AccountLayout title="Transfer Profit">{page}</AccountLayout>;
