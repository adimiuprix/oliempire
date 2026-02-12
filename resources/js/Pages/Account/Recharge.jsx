import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Navbar from '../../Components/Navbar';

export default function Recharge() {
    return (
        <div className="w-full max-w-[720px] mx-auto bg-gray-100 min-h-screen relative overflow-x-hidden shadow-2xl">
            <div className="w-full bg-green-700 h-10 flex items-center justify-center relative text-white">
                {/* Back Button */}
                <button className="absolute left-4 text-white">
                    <ArrowBackIosIcon size={22} />
                </button>
                <p>Recharge</p>
            </div>

            <div className="flex justify-center px-4">
                <div className="w-full max-w-md flex flex-col gap-6">
                    <div className="p-6 flex flex-col items-center">
                        <div className="flex items-center gap-3 mb-4">
                            <img src="/images/troncoin.webp" alt="coin logo" className="w-9 h-9 object-contain" />
                            <h2 className="text-lg font-semibold text-gray-800">TRX</h2>
                        </div>
                        <div className="w-44 h-44 flex items-center justify-center bg-gray-200 rounded-xl border">
                            <img alt="Scan me!" src="data:image/png;base64,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" className="w-40 h-40 object-contain" />
                        </div>
                        <div className="text-center text-lg font-bold text-gray-800 pt-3">
                            Address
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-4 pb-20">
                <div className="flex flex-col items-center gap-6">
                    <div className="w-full bg-gray-200 rounded-2xl px-8 py-6 text-black shadow-sm">
                        <div className="flex flex-col gap-5">
                            <div className="flex items-center gap-3">
                                <img src="/images/troncoin.webp" alt="logo" draggable="false" className="w-10 h-10 rounded-full object-cover" />
                                <span className="text-sm font-medium text-gray-800">Petroleum Development Oman</span>
                            </div>
                            <div className="flex items-center justify-between bg-gray-100 rounded-lg px-4 py-3">
                                <span className="text-sm text-gray-500 truncate">TNAz2KUV2NayzR3XwVRgdQa28J2GP4XmHS</span>
                                <button className="bg-black text-white text-xs px-3 py-1 rounded-md">Copy</button>
                            </div>
                            <button className="w-full bg-green-500 hover:bg-green-600 transition text-white py-3 rounded-full font-medium">Recharge completed</button>
                        </div>
                    </div>
                </div>
            </div>

            <Navbar />
        </div>
    )
}
