import LanguageIcon from '@mui/icons-material/Language';
import Navbar from '../Components/Navbar';
import LevelTeam from '../Components/LevelTeam';

export default function Team() {
    return (
        <div className="w-full max-w-[720px] mx-auto bg-gray-100 min-h-screen relative overflow-x-hidden shadow-2xl">

            {/* Header */}
            <div className="bg-gradient-to-br from-green-700 to-green-800 text-white p-6 rounded-b-[40px] shadow-lg">
                {/* Top Bar */}
                <div className="flex justify-between items-start">
                    {/* Left Content */}
                    <div className="flex flex-col gap-4">
                        {/* Logo + Title */}
                        <div className="flex items-center gap-2">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                                alt="logo"
                                className="w-7 h-7 rounded-full"
                            />
                            <h1 className="text-sm font-semibold">Petroleum Development Oman</h1>
                        </div>

                        {/* Invitation Code */}
                        <div>
                            <p className="text-sm opacity-90">Invitation code:</p>
                            <div className="flex items-center gap-3 mt-1">
                                <span className="text-3xl font-semibold tracking-wide">
                                    971666
                                </span>

                                <button className="bg-black text-white text-xs px-4 py-1 rounded-full">
                                    Copy
                                </button>
                            </div>
                        </div>

                        {/* Referral Link */}
                        <div>
                            <p className="text-sm opacity-90">Share your referral link and start earning</p>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-1 w-full">
                                <div className="flex-1 min-w-0">
                                    <span className="block text-sm truncate sm:break-all">https://www.oilempire.cc/#/register?ref=971666</span>
                                </div>
                                <button className="bg-black text-white text-xs px-4 py-1 rounded-full shrink-0 w-fit">
                                    Copy
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Language */}
                    <div className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-[11px] flex items-center gap-1 cursor-pointer border border-white/10 text-white shrink-0">
                        <LanguageIcon sx={{ fontSize: 16 }} /> English ▾
                    </div>

                    {/* Right Image */}
                    <div className="absolute opacity-80 right-0 z-0">
                        <img
                            src="/images/money.png"
                            alt="money"
                            className="w-32 pt-10"
                        />
                    </div>
                </div>
                {/* Social Icons */}
                <div className="w-full flex justify-center mt-4">
                    <div className="flex flex-wrap justify-center items-center gap-4">
                        {[
                            "X",
                            "F",
                            "T",
                            "in",
                            "WA",
                            "IG",
                            "TT",
                            "..."
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="
                                    w-10 h-10
                                    rounded-full
                                    border border-white/40
                                    flex items-center justify-center
                                    text-xs
                                    shrink-0
                                    hover:bg-white/10
                                    transition
                                "
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="px-4 mt-8 pb-4">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="font-bold text-gray-800 flex items-center gap-2">
                        <div className="w-1.5 h-5 bg-green-600 rounded-full" />
                        Team statistics
                    </h2>
                </div>
                <div className="w-full bg-gray-200 rounded-2xl px-8 py-6">
                    <div className="grid grid-cols-3 text-center">

                        {/* Column 1 */}
                        <div className="space-y-6">
                            <div>
                                <p className="text-sm text-black">Team size</p>
                                <p className="text-xl font-semibold text-black">13</p>
                            </div>
                            <div>
                                <p className="text-sm text-black">New team</p>
                                <p className="text-xl font-semibold text-black">0</p>
                            </div>
                        </div>

                        {/* Column 2 */}
                        <div className="space-y-6">
                            <div>
                                <p className="text-sm text-black">Team recharge</p>
                                <p className="text-xl font-semibold text-black">$7.70</p>
                            </div>
                            <div>
                                <p className="text-sm text-black">First time recharge</p>
                                <p className="text-xl font-semibold text-black">1</p>
                            </div>
                        </div>

                        {/* Column 3 */}
                        <div className="space-y-6">
                            <div>
                                <p className="text-sm text-black">Team Withdrawal</p>
                                <p className="text-xl font-semibold text-black">$3.08</p>
                            </div>
                            <div>
                                <p className="text-sm text-black">First withdrawal</p>
                                <p className="text-xl font-semibold text-black">1</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="px-4 mt-8 pb-20">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="font-bold text-gray-800 flex items-center gap-2">
                        <div className="w-1.5 h-5 bg-green-600 rounded-full" />
                        Team details
                    </h2>
                </div>
                <div className="flex flex-col items-center gap-6 mt-5">
                    <LevelTeam />
                    <LevelTeam />
                    <LevelTeam />
                    <LevelTeam />
                    <LevelTeam />
                </div>

            </div>

            <Navbar />
        </div>
    )
}
