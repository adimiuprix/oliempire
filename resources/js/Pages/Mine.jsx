import LanguageIcon from '@mui/icons-material/Language';
import PaidIcon from '@mui/icons-material/Paid';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import CandlestickChartRoundedIcon from '@mui/icons-material/CandlestickChartRounded';
import LockResetIcon from '@mui/icons-material/LockReset';
import LogoutIcon from '@mui/icons-material/Logout';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

import Navbar from '../Components/Navbar';

export default function Mine() {
    return (
        <div className="w-full max-w-[720px] mx-auto bg-gray-100 min-h-screen relative overflow-x-hidden shadow-2xl">

            {/* Header */}
            <div className="relative bg-linear-to-br from-green-700 to-green-800 text-white p-6 pb-15 rounded-b-[40px] shadow-lg">
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

                        {/* User Email */}
                        <div>
                            <p className="text-sm font-semibold">hello,awansean557@gmail.com</p>
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

                {/* Balance */}
                <div className="flex justify-between text-center mt-2">
                    <div className="flex-1">
                        <div className="text-lg font-semibold">5.08</div>
                        <div className="text-sm opacity-80">Total balance (USDT)</div>
                    </div>
                    <div className="flex-1">
                        <div className="text-lg font-semibold">0</div>
                        <div className="text-sm opacity-80">Recharge amount (USDT)</div>
                    </div>
                </div>

                <div className="absolute left-1/2 -translate-x-1/2 -bottom-20 w-[94%]">
                    <div className="bg-linear-to-r from-gray-800 to-gray-700 rounded-2xl px-5 py-4 flex justify-between items-center shadow-xl">
                        <div>
                            <p className="text-yellow-400 font-semibold text-sm">
                                ♦ Investment Plan 1
                            </p>
                            <p className="text-gray-300 text-xs mt-1">
                                Save your money&time
                            </p>
                        </div>
                        <button className="bg-lime-400 text-black text-xs px-5 py-1.5 rounded-full font-medium">
                            Account
                        </button>
                    </div>
                </div>
            </div>

            <div className="p-4 min-h-screen pt-10">
                <div className="grid grid-cols-3 gap-3 px-4 mt-5">

                    <div className="flex flex-col items-center justify-center py-6">
                        <div className="p-3">
                            <PaidIcon size={25} className='text-green-600' />
                        </div>
                        <p className="mt-3 text-sm text-gray-700">Recharge</p>
                    </div>

                    <div className="flex flex-col items-center justify-center py-6">
                        <div className="p-3">
                            <ExitToAppRoundedIcon size={25} className='text-green-600' />
                        </div>
                        <p className="mt-3 text-sm text-gray-700">Withdraw</p>
                    </div>

                    <div className="flex flex-col items-center justify-center py-6">
                        <div className="p-3">
                            <CandlestickChartRoundedIcon size={25} className='text-green-600' />
                        </div>
                        <p className="mt-3 text-sm text-gray-700">Financial records</p>
                    </div>
                </div>

                <div className="divide-y divide-gray-200">
                    {/* Change Password */}
                    <button className="w-full flex items-center justify-between px-4 py-4 cursor-pointer">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-gray-200 rounded-lg">
                                <LockResetIcon size={25} />
                            </div>
                            <span className="text-sm text-gray-800">Change Password</span>
                        </div>
                        <KeyboardDoubleArrowRightIcon className="text-gray-500" />
                    </button>
                    {/* Sign Out */}
                    <button className="w-full flex items-center justify-between px-4 py-4 cursor-pointer">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-gray-200 rounded-lg">
                                <LogoutIcon size={25} />
                            </div>
                            <span className="text-sm text-gray-800">Sign out</span>
                        </div>
                        <KeyboardDoubleArrowRightIcon className="text-gray-500" />
                    </button>
                </div>
            </div>

            {/* Bottom Navbar */}
            <Navbar />

        </div>
    )
}
