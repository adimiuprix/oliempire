"use client"
import { useState } from "react"
import LanguageIcon from '@mui/icons-material/Language';
import Navbar from '../Components/Navbar';

export default function Task() {
    const [activeTab, setActiveTab] = useState("progress")
    return (
        <div className="w-full max-w-[720px] mx-auto bg-gray-100 min-h-screen relative overflow-x-hidden shadow-2xl">

            {/* Header */}
            <div className="bg-linear-to-br from-green-700 to-green-800 text-white p-6 rounded-b-[40px] shadow-lg">

                {/* Top Bar */}
                <div className="flex justify-between items-center">

                    {/* Logo + Title */}
                    <div className="flex items-center gap-2">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                            alt="logo"
                            className="w-7 h-7 rounded-full"
                        />
                        <h1 className="text-sm font-semibold">
                            Petroleum Development Oman
                        </h1>
                    </div>

                    {/* Language */}
                    <div className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-[11px] flex items-center gap-1 cursor-pointer border border-white/10 text-white shrink-0">
                        <LanguageIcon sx={{ fontSize: 16 }} /> English ▾
                    </div>
                </div>

                {/* Balance Section */}
                <div className="mt-2">
                    <div className="text-2xl font-semibold">5.08</div>
                    <div className="text-sm opacity-80">Total balance</div>

                    {/* Recharge Button */}
                    <div className="flex justify-end -mt-6">
                        <button className="bg-black text-white text-xs px-4 py-1 rounded-full">
                            Recharge
                        </button>
                    </div>
                </div>

                {/* Stats */}
                <div className="flex justify-between text-center mt-2">
                    <div className="flex-1">
                        <div className="text-lg font-semibold">0</div>
                        <div className="text-sm opacity-80">Completed</div>
                    </div>
                    <div className="flex-1">
                        <div className="text-lg font-semibold">2</div>
                        <div className="text-sm opacity-80">All</div>
                    </div>
                    <div className="flex-1">
                        <div className="text-lg font-semibold">1</div>
                        <div className="text-sm opacity-80">In progress</div>
                    </div>
                </div>

                {/* Crawl Button */}
                <div className="mt-3">
                    <button className="w-full bg-yellow-300 text-black font-semibold py-3 rounded-xl">
                        Crawl
                    </button>
                </div>
            </div>

            <div className="p-4 bg-gray-100 min-h-screen">

                {/* Tabs */}
                <div className="flex justify-between text-sm font-medium mb-4">
                    <button
                        onClick={() => setActiveTab("progress")}
                        className={`flex-1 pb-2 ${activeTab === "progress"
                            ? "text-black border-b-2 border-black"
                            : "text-gray-500"
                            }`}
                    >
                        In progress
                    </button>

                    <button
                        onClick={() => setActiveTab("completed")}
                        className={`flex-1 pb-2 ${activeTab === "completed"
                            ? "text-black border-b-2 border-black"
                            : "text-gray-500"
                            }`}
                    >
                        Completed
                    </button>
                </div>

                {/* Content */}
                {activeTab === "progress" && (
                    <div className="bg-white rounded-2xl p-4 shadow-sm">

                        <div className="flex gap-4">

                            {/* Image */}
                            <img
                                src="https://m.media-amazon.com/images/I/61P1k0X0y-L._AC_SL1500_.jpg"
                                alt="product"
                                className="w-24 h-24 object-cover rounded-lg"
                            />

                            {/* Details */}
                            <div className="flex-1">

                                {/* Title */}
                                <div className="bg-gray-100 rounded-md px-2 py-1 text-sm font-medium leading-snug">
                                    100g Enamel Polyurethane Copper Wire Coil QA-1 2UEW 0.1/0.2/0.3/0.4/0.5/0.6/0.7mm
                                </div>

                                {/* Price & Income */}
                                <div className="mt-3 text-sm text-gray-500">
                                    <div className="flex justify-between">
                                        <span>Price</span>
                                        <span className="text-black">8.63</span>
                                    </div>
                                    <div className="flex justify-between mt-1">
                                        <span>Income</span>
                                        <span className="text-black">23.30</span>
                                    </div>
                                </div>

                                {/* Button */}
                                <div className="flex justify-end mt-3">
                                    <button className="bg-black text-white text-xs px-4 py-1 rounded-full">
                                        To complete
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "completed" && (
                    <div className="text-center text-gray-400 mt-10 text-sm">
                        No completed tasks
                    </div>
                )}
            </div>

            {/* Bottom Navbar */}
            <Navbar />
        </div>
    )
}
