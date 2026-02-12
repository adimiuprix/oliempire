import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function Withdraw() {

    const methods = [
        { name: "BEP20-USDT", active: true },
        { name: "BNB" },
        { name: "BEP20-USDC" },
        { name: "TRX" },
        { name: "POLYGON-USDC" },
        { name: "POLYGON-USDT" },
        { name: "ETH-USDC" },
        { name: "ETH-USDT" },
    ];

    return (
        <div className="w-full max-w-[720px] mx-auto bg-gray-100 min-h-screen relative overflow-x-hidden shadow-2xl">
            <div className="w-full bg-green-700 h-10 flex items-center justify-center relative text-white">
                {/* Back Button */}
                <button className="absolute left-4 text-white">
                    <ArrowBackIosIcon size={22} />
                </button>
                <p>Recharge</p>
            </div>

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

                        <div className="flex flex-wrap gap-3 mb-6">
                            {methods.map((item, i) => (
                            <button
                                key={i}
                                className={`flex items-center gap-2 px-4 py-2 rounded-md border text-sm
                                ${
                                item.active
                                    ? "bg-green-700 text-white border-green-600"
                                    : "bg-gray-200 border-black/30"
                                }`}
                            >
                                <div className="w-5 h-5 bg-white rounded-full"></div>
                                {item.name}
                            </button>
                            ))}
                        </div>

                        <p className="text-gray-700 text-sm mb-3">Quota 1.000 - 88888.000</p>

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







        </div>
    )
}
