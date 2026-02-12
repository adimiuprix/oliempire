import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function SelectRecharge() {
    const networks = [
        { name: "BEP20-USDT", icon: "/images/coins/bep20-usdt.webp" },
        { name: "BNB", icon: "/images/coins/bnb.webp" },
        { name: "BEP20-USDC", icon: "/images/coins/bep20-usdc.webp" },
        { name: "TRX", icon: "/images/coins/trx.webp" },
        { name: "TRC20-USDT", icon: "/images/coins/trc20-usdt.webp" },
        { name: "POLYGON-USDC", icon: "/images/coins/polygon-usdc.webp" },
        { name: "POLYGON-USDT", icon: "/images/coins/polygon-usdt.webp" },
        { name: "ETH-USDC", icon: "/images/coins/eth-usdc.webp" },
        { name: "ETH-USDT", icon: "/images/coins/eth-usdt.webp" },
    ];

    return (
        <div className="w-full max-w-[720px] mx-auto bg-gray-100 min-h-screen relative overflow-x-hidden shadow-2xl">
            <div className="w-full bg-green-700 h-10 flex items-center justify-center relative text-white">
                {/* Back Button */}
                <button className="absolute left-4 text-white">
                    <ArrowBackIosIcon size={22} />
                </button>
                <p>Select Recharge</p>
            </div>

            <div className="w-full rounded-2xl px-8 py-6 text-black">
                <div className="bg-gray-200 rounded-xl overflow-hidden">
                    {networks.map((item, index) => (
                    <div
                        key={index}
                        className={`flex items-center justify-between py-4 px-4 ${
                        index !== networks.length - 1
                            ? "border-b border-dashed border-black/30"
                            : ""
                        }`}
                    >
                        <div className="flex items-center gap-3">
                            <img
                                src={item.icon}
                                alt={item.name}
                                className="w-7 h-7 rounded-full object-contain"
                            />
                            <span className="font-medium">{item.name}</span>
                        </div>
                        <ArrowForwardIosIcon className="w-4 h-4 text-black/70" />
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
