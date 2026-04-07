import AccountLayout from '../../Layouts/AccountLayout';
import * as Tabs from '@radix-ui/react-tabs';
import { useForm } from '@inertiajs/react';

export default function Withdraw({ balance, profit_balance, coins, wallet_address }) {

    const methods = coins.map(coin => ({
        name: coin.name,
        image: `/images/coins/${coin.icon}`
    }));

    const { data, setData, post, processing, errors } = useForm({
        amount: profit_balance,
        wallet_address: wallet_address || '',
        password: '',
        method: methods.length > 0 ? methods[0].name : '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/account/withdraw');
    }

    return (
        <div className="px-4 pb-20 pt-5">
            <form onSubmit={handleSubmit} className="flex flex-col items-center gap-6">
                <div className="w-full bg-gray-200 rounded-2xl px-8 py-6 text-black shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h2 className="text-lg font-semibold">Withdrawal account</h2>
                            <p className="text-red-500 text-sm">24 hours withdrawal</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-5">
                        <div className="bg-gray-300 rounded-xl p-4">
                            <p className="text-sm opacity-80">Main balance</p>
                            <p className="text-xl font-bold text-green-800">
                                {Number(balance).toFixed(2)} <span className="text-black text-sm">USDT</span>
                            </p>
                        </div>
                        <div className="bg-gray-300 rounded-xl p-4">
                            <p className="text-sm opacity-80">Profit balance</p>
                            <p className="text-xl font-bold text-amber-700">
                                {Number(profit_balance).toFixed(2)} <span className="text-black text-sm">USDT</span>
                            </p>
                            <p className="text-[10px] text-gray-500 mt-1">Transfer to main to withdraw</p>
                        </div>
                    </div>

                    <p className="mb-2 text-sm">Withdrawal method:</p>

                    <Tabs.Root
                        defaultValue={data.method}
                        onValueChange={(val) => setData('method', val)}
                        className="w-full"
                    >
                        <Tabs.List className="flex flex-wrap gap-3 mb-6">
                            {methods.map((item, i) => (
                                <Tabs.Trigger
                                    key={i}
                                    value={item.name}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-md border text-sm transition-all cursor-pointer
                                        data-[state=active]:bg-green-700 data-[state=active]:text-white data-[state=active]:border-green-600
                                        data-[state=inactive]:bg-gray-200 data-[state=inactive]:border-black/30
                                    `}
                                >
                                    <img src={item.image} alt={item.name} className="w-5 h-5 object-contain" />
                                    {item.name}
                                </Tabs.Trigger>
                            ))}
                        </Tabs.List>

                        {/* Kamu bisa menambahkan content berbeda untuk setiap tab di sini jika perlu */}
                        {methods.map((item, i) => (
                            <Tabs.Content key={i} value={item.name} className="outline-hidden">
                                <p className="text-gray-700 text-sm mb-3">Quota 1.000 - 88888.000 ({item.name})</p>
                            </Tabs.Content>
                        ))}
                    </Tabs.Root>

                    <div className="border-b border-black/20 mb-4">
                        <input
                            type="text"
                            placeholder="Please enter the wallet address"
                            className="w-full bg-transparent py-3 text-sm outline-none border-none placeholder:text-gray-500"
                            value={data.wallet_address}
                            onChange={e => setData('wallet_address', e.target.value)}
                        />
                        {errors.wallet_address && <div className="text-red-500 text-xs mt-1">{errors.wallet_address}</div>}
                    </div>

                    <div className="border-b border-black/20 mb-4 flex justify-between items-center">
                        <input
                            type="password"
                            placeholder="Withdrawal password"
                            className="w-full bg-transparent py-3 text-sm outline-none border-none placeholder:text-gray-500"
                            value={data.password}
                            onChange={e => setData('password', e.target.value)}
                        />
                        <span className="text-gray-500 cursor-pointer">👁</span>
                    </div>
                    {errors.password && <div className="text-red-500 text-xs mb-4 -mt-3">{errors.password}</div>}
                    {errors.amount && <div className="text-red-500 text-xs mb-4">{errors.amount}</div>}

                    <div className="flex justify-between text-sm mb-1">
                        <span>Fees</span>
                        <span className="line-through">0 USDT</span>
                    </div>

                    <div className="flex justify-between text-sm mb-6">
                        <span>Actually received</span>
                        <span>{data.amount || 0} USDT</span>
                    </div>

                    <button
                        type="submit"
                        disabled={processing}
                        className="w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-black font-medium py-3 rounded-full transition-colors"
                    >
                        {processing ? 'Processing...' : 'Confirm'}
                    </button>
                    
                    {Object.keys(errors).length > 0 && !errors.wallet_address && !errors.password && !errors.amount && (
                        <div className="text-red-500 text-center text-xs mt-4">
                            There was an error with your submission.
                        </div>
                    )}
                </div>
            </form>
        </div>

    )
}

Withdraw.layout = (page) => <AccountLayout title="Withdraw">{page}</AccountLayout>;

