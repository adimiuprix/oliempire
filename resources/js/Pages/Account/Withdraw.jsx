import AccountLayout from '../../Layouts/AccountLayout';
import * as Tabs from '@radix-ui/react-tabs';

export default function Withdraw() {

    const methods = [
        { name: "BEP20-USDT", image: "/images/coins/bep20-usdt.webp" },
        { name: "BNB", image: "/images/coins/bnb.webp" },
        { name: "BEP20-USDC", image: "/images/coins/bep20-usdc.webp" },
        { name: "TRX", image: "/images/coins/trx.webp" },
        { name: "POLYGON-USDC", image: "/images/coins/polygon-usdc.webp" },
        { name: "POLYGON-USDT", image: "/images/coins/polygon-usdt.webp" },
        { name: "ETH-USDC", image: "/images/coins/eth-usdc.webp" },
        { name: "ETH-USDT", image: "/images/coins/eth-usdt.webp" },
    ];

    return (
        <div className="px-4 pb-20 pt-5">
            <div className="flex flex-col items-center gap-6">
                <div className="w-full bg-gray-200 rounded-2xl px-8 py-6 text-black shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h2 className="text-lg font-semibold">Withdrawal account</h2>
                            <p className="text-red-500 text-sm">24 hours withdrawal</p>
                        </div>

                        <div className="w-10 h-10 rounded-full bg-white"></div>
                    </div>

                    <div className="bg-gray-300 rounded-xl p-4 mb-5">
                        <p className="text-sm opacity-80">Total balance</p>
                        <p className="text-xl font-bold text-green-800">
                            5.086 <span className="text-black text-base">USDT</span>
                        </p>
                    </div>

                    <p className="mb-2 text-sm">Withdrawal method:</p>

                    <Tabs.Root defaultValue="BEP20-USDT" className="w-full">
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

                    <div className="border-b border-black/20 py-3 mb-4 text-sm">
                        0x8119d4623c37635Bcd323d8A3a8ba922a4C36829
                    </div>

                    <div className="border-b border-black/20 py-3 mb-4 flex justify-between">
                        <span className="text-gray-700">Password</span>
                        <span>👁</span>
                    </div>

                    <div className="flex justify-between text-sm mb-1">
                        <span>Fees</span>
                        <span className="line-through">0 USDT</span>
                    </div>

                    <div className="flex justify-between text-sm mb-6">
                        <span>Actually received</span>
                        <span>0 USDT</span>
                    </div>

                    <button className="w-full bg-green-500 hover:bg-green-600 text-black font-medium py-3 rounded-full">
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    )
}

Withdraw.layout = (page) => <AccountLayout title="Withdraw">{page}</AccountLayout>;
