import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import LanguageIcon from '@mui/icons-material/Language';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Dashboard() {
    return (
        <div className="w-180 bg-gray-100 min-h-screen">

            {/* Header */}
            <div className="bg-green-700 text-white p-4 rounded-b-3xl">
                <div className="flex justify-between items-center text-sm opacity-90">
                    <div className="w-full bg-green-700 py-3 px-3">
                        <div className="flex items-center justify-between h-full w-full">
                            {/* Banner */}
                            <div className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full shadow-md flex-1 min-w-0">
                                <VolumeUpIcon sx={{ fontSize: 18 }} />
                                <p className="text-xs whitespace-nowrap overflow-hidden text-ellipsis">
                                    Our goal is to share oil globally and maximize the sustainable
                                    benefits for investors!
                                </p>
                            </div>
                            {/* Language */}
                            <div className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-[11px] flex items-center gap-1 cursor-pointer border border-white/10 text-white shrink-0">
                                <LanguageIcon sx={{ fontSize: 16 }} /> English ▾
                            </div>
                        </div>
                    </div>

                </div>

                <div className="flex items-center gap-3 mt-4">
                    <img
                    src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                    alt="logo"
                    className="w-10 h-10 rounded-full"
                    />
                    <div>
                    <h1 className="font-semibold text-lg">
                        Petroleum Development Oman
                    </h1>
                    <p className="text-sm opacity-80">Save your money&time</p>
                    </div>
                </div>

            </div>

            {/* Menu Buttons */}
            <div className="grid grid-cols-3 gap-3 px-4 mt-5">

                <div className="w-full max-w-full space-y-3">
                    <div className="flex items-center justify-between bg-green-700 rounded-2xl px-4 py-3 shadow-sm">
                        {/* Left content */}
                        <div className="flex items-center gap-3">
                            {/* Neon bar */}
                            <div className="w-1.5 h-6 bg-green-400 rounded-full" />

                            {/* Text */}
                            <span className="text-white font-semibold text-sm tracking-wide">
                                Withdraw
                            </span>
                        </div>
                        {/* Icon */}
                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/10">
                            <LogoutIcon sx={{ fontSize: 18, color: "white" }} />
                        </div>
                    </div>
                </div>

                <div className="w-full max-w-full space-y-3">
                    <div className="flex items-center justify-between bg-green-700 rounded-2xl px-4 py-3 shadow-sm">
                        {/* Left content */}
                        <div className="flex items-center gap-3">
                            {/* Neon bar */}
                            <div className="w-1.5 h-6 bg-green-400 rounded-full" />

                            {/* Text */}
                            <span className="text-white font-semibold text-sm tracking-wide">
                                Withdraw
                            </span>
                        </div>
                        {/* Icon */}
                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/10">
                            <LogoutIcon sx={{ fontSize: 18, color: "white" }} />
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-full space-y-3">
                    <div className="flex items-center justify-between bg-green-700 rounded-2xl px-4 py-3 shadow-sm">
                        {/* Left content */}
                        <div className="flex items-center gap-3">
                            {/* Neon bar */}
                            <div className="w-1.5 h-6 bg-green-400 rounded-full" />

                            {/* Text */}
                            <span className="text-white font-semibold text-sm tracking-wide">
                                Withdraw
                            </span>
                        </div>
                        {/* Icon */}
                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/10">
                            <LogoutIcon sx={{ fontSize: 18, color: "white" }} />
                        </div>
                    </div>
                </div>


            </div>

            {/* Banner */}
            <div className="px-4 mt-5">
            <img
                src="https://images.unsplash.com/photo-1581093588401-22f8f7c3a6e2?q=80&w=1200"
                alt="banner"
                className="rounded-2xl w-full h-40 object-cover"
            />
            </div>

            {/* Countdown */}
            <div className="text-center mt-4">
            <div className="text-green-700 text-2xl font-semibold">23:13:32</div>
            <p className="text-green-700 text-sm">Task Reset Countdown</p>
            </div>

            {/* Task Hall */}
            <div className="px-4 mt-6">
                <h2 className="font-semibold mb-3">Task Hall</h2>

                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-300 rounded-2xl h-36 relative">
                        {/* Content */}
                        <div className="px-4 mt-4">
                            {/* Title box */}
                            <div className="bg-gray-300 rounded-lg px-3 py-2 flex items-center gap-2">
                                <div className="w-1 h-4 bg-green-500 rounded-full" />
                                <span className="text-sm font-medium text-gray-800">
                                Investment Plan 1
                                </span>
                            </div>

                            {/* Commission */}
                            <div className="mt-3">
                                <p className="text-xs text-gray-700">Order commission</p>
                                <p className="text-green-600 font-semibold text-lg">$1.48</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-300 rounded-2xl h-36 relative">

                    </div>
                </div>
            </div>

            {/* Member List */}
            <div className="px-4 mt-6">
                <h2 className="font-semibold mb-3">Member list</h2>

                {/* Container abu rounded */}
                <div className="bg-gray-200 rounded-2xl px-4 py-3 space-y-4">

                    {/* item1 */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <span className="bg-green-600 text-white text-[10px] px-2 py-1 rounded-md font-semibold">6765</span>
                            <span className="text-gray-700 text-sm tracking-wide">865658567</span>
                        </div>
                        <span className="text-slate-800 font-semibold text-lg">5895658657</span>
                    </div>

                    {/* item2 */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <span className="bg-green-600 text-white text-[10px] px-2 py-1 rounded-md font-semibold">6765</span>
                            <span className="text-gray-700 text-sm tracking-wide">865658567</span>
                        </div>
                        <span className="text-slate-800 font-semibold text-lg">5895658657</span>
                    </div>


                </div>
            </div>


            {/* Bottom Navbar */}
            <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[420px]">
            <div className="bg-green-700 text-white flex justify-around py-3">
                <span>Home</span>
                <span>Task</span>
                <span>Team</span>
                <span>VIP</span>
                <span>Me</span>
            </div>
            </div>
        </div>
    );
}
