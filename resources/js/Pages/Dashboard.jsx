import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import LanguageIcon from '@mui/icons-material/Language';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Dashboard() {
    return (
        <div className="w-full max-w-[720px] mx-auto bg-gray-100 min-h-screen relative overflow-x-hidden shadow-2xl">

            {/* Header */}
            <div className="bg-gradient-to-br from-green-700 to-green-800 text-white p-6 rounded-b-[40px] shadow-lg">
                <div className="flex justify-between items-center text-sm opacity-90">
                    <div className="w-full py-3 px-3">
                        <div className="flex items-center justify-between h-full w-full">
                            {/* Banner */}
                            <div className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full shadow-md flex-1 min-w-0">
                                <VolumeUpIcon sx={{ fontSize: 18 }} />
                                <p className="text-xs whitespace-nowrap overflow-hidden text-ellipsis">
                                    Our ge the sustainable investors!
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
            <div className="px-4 mt-8 pb-4">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="font-bold text-gray-800 flex items-center gap-2">
                        <div className="w-1.5 h-5 bg-green-600 rounded-full" />
                        Task Hall
                    </h2>
                    <span className="text-[10px] text-green-600 font-bold uppercase tracking-widest bg-green-50 px-3 py-1 rounded-full border border-green-100">Hot Plans</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    {/* Plan 1 */}
                    <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer border border-gray-100 group">
                        <div className="h-32 bg-gray-100 overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                            <img
                                src="https://images.unsplash.com/photo-1544115121-50e56163777d?q=80&w=400"
                                alt="plan"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute bottom-3 left-3 z-20">
                                <span className="bg-green-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase">Active</span>
                            </div>
                        </div>
                        <div className="p-4 relative">
                            <span className="text-[11px] font-bold text-gray-800 uppercase tracking-tight block mb-3">
                                Crude Oil Alpha
                            </span>
                            <div className="flex justify-between items-end">
                                <div>
                                    <p className="text-[9px] text-gray-400 font-medium leading-none">Daily Profit</p>
                                    <p className="text-green-600 font-black text-xl leading-none mt-1.5">$1.48</p>
                                </div>
                                <div className="w-8 h-8 rounded-2xl bg-green-600 flex items-center justify-center text-white shadow-lg shadow-green-600/30 group-hover:rotate-12 transition-transform">
                                    <VolumeUpIcon sx={{ fontSize: 16 }} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Plan 2 */}
                    <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer border border-gray-100 group">
                        <div className="h-32 bg-gray-100 overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                            <img
                                src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=400"
                                alt="plan"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute bottom-3 left-3 z-20">
                                <span className="bg-green-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase">Active</span>
                            </div>
                        </div>
                        <div className="p-4 relative">
                            <span className="text-[11px] font-bold text-gray-800 uppercase tracking-tight block mb-3">
                                Brent Crude B2
                            </span>
                            <div className="flex justify-between items-end">
                                <div>
                                    <p className="text-[9px] text-gray-400 font-medium leading-none">Daily Profit</p>
                                    <p className="text-green-600 font-black text-xl leading-none mt-1.5">$5.50</p>
                                </div>
                                <div className="w-8 h-8 rounded-2xl bg-green-600 flex items-center justify-center text-white shadow-lg shadow-green-600/30 group-hover:rotate-12 transition-transform">
                                    <VolumeUpIcon sx={{ fontSize: 16 }} />
                                </div>
                            </div>
                        </div>
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
            <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[720px] z-50 px-4 pb-4">
                <div className="bg-green-700/90 backdrop-blur-lg text-white flex justify-around py-4 rounded-2xl shadow-2xl border border-white/20">
                    <div className="flex flex-col items-center gap-1 cursor-pointer hover:scale-110 transition-transform">
                        <span className="text-[11px] font-semibold">Home</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 cursor-pointer opacity-70 hover:opacity-100 hover:scale-110 transition-all">
                        <span className="text-[11px] font-semibold">Task</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 cursor-pointer opacity-70 hover:opacity-100 hover:scale-110 transition-all">
                        <span className="text-[11px] font-semibold">Team</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 cursor-pointer opacity-70 hover:opacity-100 hover:scale-110 transition-all">
                        <span className="text-[11px] font-semibold">VIP</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 cursor-pointer opacity-70 hover:opacity-100 hover:scale-110 transition-all">
                        <span className="text-[11px] font-semibold">Me</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
