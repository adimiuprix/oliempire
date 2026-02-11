import * as Tabs from "@radix-ui/react-tabs";
import { router } from "@inertiajs/react";
import Visibility from '@mui/icons-material/Visibility';
import Email from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import PhoneIcon from '@mui/icons-material/Phone';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import LanguageIcon from '@mui/icons-material/Language';
import HeadsetIcon from '@mui/icons-material/Headset';

export default function Register() {
    return (
        <div className="w-full max-w-[720px] mx-auto min-h-screen bg-[#008c44] flex flex-col relative overflow-hidden shadow-xl">
            {/* Top Bar */}
            <div className="flex justify-between items-center px-5 pt-6 text-white">
                <div className="text-xl cursor-pointer">
                    <HeadsetIcon sx={{ fontSize: 18 }} />
                </div>
                <div className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-[10px] flex items-center gap-1 cursor-pointer border border-white/5">
                    <LanguageIcon sx={{ fontSize: 18 }} /> English ▾
                </div>
            </div>

            {/* Header / Logo Section */}
            <div className="text-center pt-2 pb-6 px-4 text-white">
                <div className="flex justify-center mb-4">
                    <div className="w-20 h-20 rounded-2xl bg-white p-1 shadow-lg overflow-hidden flex items-center justify-center">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/en/2/23/Petroleum_Development_Oman_logo.png"
                            alt="PDO Logo"
                            className="w-16 h-16 object-contain"
                        />
                    </div>
                </div>

                <h1 className="text-xl font-bold tracking-tight">Petroleum Development Oman</h1>
                <p className="text-[10px] text-white/80 mt-1 uppercase tracking-[0.2em] font-medium">Save your money & time</p>
            </div>

            {/* Form Card (Floating) */}
            <div className="bg-white rounded-2xl mx-4 p-8 shadow-2xl z-10">
                <Tabs.Root defaultValue="email">
                    {/* Tabs List */}
                    <Tabs.List className="flex justify-around text-xs font-semibold mb-8">
                        <Tabs.Trigger
                            value="email"
                            className="pb-3 border-b-2 border-transparent data-[state=active]:border-[#008c44] data-[state=active]:text-[#008c44] text-gray-400 cursor-pointer transition-all outline-none"
                        >
                            Register by Email
                        </Tabs.Trigger>
                        <Tabs.Trigger
                            value="phone"
                            className="pb-3 border-b-2 border-transparent data-[state=active]:border-[#008c44] data-[state=active]:text-[#008c44] text-gray-400 cursor-pointer transition-all outline-none"
                        >
                            Register by phone
                        </Tabs.Trigger>
                    </Tabs.List>

                    {/* Form Fields - Email Content */}
                    <Tabs.Content value="email" className="space-y-6 outline-none">
                        <div className="space-y-1">
                            <label className="text-[11px] font-bold text-gray-800 ml-1">E-mail</label>
                            <div className="flex items-center border-b border-gray-100 py-2.5">
                                <span className="text-gray-400 mr-3 flex items-center">
                                    <Email sx={{ fontSize: 18 }} />
                                </span>
                                <input
                                    type="email"
                                    placeholder="E-mail"
                                    className="bg-transparent outline-none w-full text-sm placeholder:text-gray-300"
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-[11px] font-bold text-gray-800 ml-1">Password</label>
                            <div className="flex items-center border-b border-gray-100 py-2.5">
                                <span className="text-gray-300 mr-3 text-sm">
                                    <KeyIcon sx={{ fontSize: 18 }} />
                                </span>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="bg-transparent outline-none w-full text-sm placeholder:text-gray-300"
                                />
                                <span className="text-gray-300 flex items-center cursor-pointer">
                                    <Visibility sx={{ fontSize: 18 }} />
                                </span>
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-[11px] font-bold text-gray-800 ml-1">Reenter password</label>
                            <div className="flex items-center border-b border-gray-100 py-2.5">
                                <span className="text-gray-300 mr-3 text-sm">
                                    <KeyIcon sx={{ fontSize: 18 }} />
                                </span>
                                <input
                                    type="password"
                                    placeholder="Reenter password"
                                    className="bg-transparent outline-none w-full text-sm placeholder:text-gray-300"
                                />
                                <span className="text-gray-300 flex items-center cursor-pointer">
                                    <Visibility sx={{ fontSize: 18 }} />
                                </span>
                            </div>
                        </div>
                    </Tabs.Content>

                    {/* Form Fields - Phone Content */}
                    <Tabs.Content value="phone" className="space-y-6 outline-none">
                        <div className="space-y-1">
                            <label className="text-[11px] font-bold text-gray-800 ml-1">Phone Number</label>
                            <div className="flex items-center border-b border-gray-100 py-2.5">
                                <span className="text-gray-400 mr-3 text-sm">
                                    <PhoneIcon sx={{ fontSize: 18 }} />
                                </span>
                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    className="bg-transparent outline-none w-full text-sm placeholder:text-gray-300"
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-[11px] font-bold text-gray-800 ml-1">Password</label>
                            <div className="flex items-center border-b border-gray-100 py-2.5">
                                <span className="text-gray-300 mr-3 text-sm">
                                    <KeyIcon sx={{ fontSize: 18 }} />
                                </span>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="bg-transparent outline-none w-full text-sm placeholder:text-gray-300"
                                />
                                <span className="text-gray-300 flex items-center cursor-pointer">
                                    <Visibility sx={{ fontSize: 18 }} />
                                </span>
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-[11px] font-bold text-gray-800 ml-1">Reenter password</label>
                            <div className="flex items-center border-b border-gray-100 py-2.5">
                                <span className="text-gray-300 mr-3 text-sm">
                                    <KeyIcon sx={{ fontSize: 18 }} />
                                </span>
                                <input
                                    type="password"
                                    placeholder="Reenter password"
                                    className="bg-transparent outline-none w-full text-sm placeholder:text-gray-300"
                                />
                                <span className="text-gray-300 flex items-center cursor-pointer">
                                    <Visibility sx={{ fontSize: 18 }} />
                                </span>
                            </div>
                        </div>
                    </Tabs.Content>

                    {/* Common Fields */}
                    <div className="space-y-1 mt-6">
                        <label className="text-[11px] font-bold text-gray-800 ml-1">Invitation code</label>
                        <div className="flex items-center border-b border-gray-100 py-2.5">
                            <span className="text-[#36e01d] mr-3 text-xs">
                                <ThumbUpAltIcon sx={{ fontSize: 18 }} />
                            </span>
                            <input
                                type="text"
                                defaultValue="971666"
                                className="bg-transparent outline-none w-full text-sm font-medium text-gray-700"
                            />
                        </div>
                    </div>
                </Tabs.Root>

                {/* Sign Up Button (Overlapping Card) */}
                <div className="relative h-7">
                    <button className="absolute left-0 right-0 top-6 w-full bg-[#1fff1a] hover:bg-[#1cd417] transition-all transform active:scale-[0.98] text-black font-bold py-4 rounded-full text-sm shadow-xl shadow-[#1fff1a]/20">
                        Sign Up
                    </button>
                </div>
            </div>

            {/* Bottom Button Section */}
            <div className="px-12 mt-12 pb-24 z-10 w-full">
                <button onClick={() => router.get('/login')} className="w-full bg-[#006837]/50 backdrop-blur-md border border-white/5 text-white/90 font-medium py-3.5 rounded-full text-sm active:scale-[0.98] transition-all">
                    Sign In
                </button>
            </div>

            {/* Footer Decorative Image / Content */}
            <div className="absolute bottom-0 left-0 w-full pointer-events-none">
                {/* Simulated coins background bottom */}
                <div className="h-32 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
        </div>
    )
}
