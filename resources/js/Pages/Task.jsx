"use client"
import { useState } from "react"
import LanguageIcon from '@mui/icons-material/Language';
import Navbar from '../Components/Navbar';
import { router, usePage } from '@inertiajs/react';

export default function Task({ balance, profit_balance, all_count, completed_count, in_progress_count, investments }) {
    const [activeTab, setActiveTab] = useState("progress")

    // Filter investments based on tab
    const filteredInvestments = investments.filter(inv =>
        activeTab === "progress" ? !inv.is_completed : inv.is_completed
    );

    const handleCrawl = (investmentId = null) => {
        router.post('/crawl', {
            investment_id: investmentId
        }, {
            preserveScroll: true,
            onSuccess: (page) => {
                const flash = page.props.flash;
                if (flash?.success) alert(flash.success);
                if (flash?.error) alert(flash.error);
            },
            onError: (errors) => {
                alert(Object.values(errors)[0] || "Action failed");
            }
        });
    }

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
                <div className="mt-2 flex justify-between items-end">
                    <div className="text-left">
                        <div className="text-2xl font-semibold">{Number(balance).toFixed(2)}</div>
                        <div className="text-sm opacity-80">Total balance</div>
                    </div>
                    <div className="text-right">
                        <div className="text-2xl font-semibold">{Number(profit_balance).toFixed(2)}</div>
                        <div className="text-sm opacity-80">Profit balance</div>
                    </div>
                </div>

                {/* Recharge Button */}
                <div className="flex justify-start mt-2">
                    <button className="bg-black text-white text-[10px] px-3 py-1 rounded-full uppercase font-bold">
                        Recharge
                    </button>
                </div>

                {/* Stats */}
                <div className="flex justify-between text-center mt-2">
                    <div className="flex-1">
                        <div className="text-lg font-semibold">{completed_count}</div>
                        <div className="text-sm opacity-80">Completed</div>
                    </div>
                    <div className="flex-1">
                        <div className="text-lg font-semibold">{all_count}</div>
                        <div className="text-sm opacity-80">All</div>
                    </div>
                    <div className="flex-1">
                        <div className="text-lg font-semibold">{in_progress_count}</div>
                        <div className="text-sm opacity-80">In progress</div>
                    </div>
                </div>

                {/* Crawl Button */}
                <div className="mt-3">
                    <button
                        onClick={() => handleCrawl()}
                        className="w-full bg-yellow-300 text-black font-semibold py-3 rounded-xl shadow-md active:scale-95 transition-transform">
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
                <div className="space-y-4">
                    {filteredInvestments.length > 0 ? (
                        filteredInvestments.map((inv) => (
                            <div key={inv.id} className="bg-white rounded-2xl p-4 shadow-sm">
                                <div className="flex gap-4">

                                    {/* Image */}
                                    <div className="w-24 h-24 shrink-0">
                                        <img
                                            src={inv.image}
                                            alt="product"
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                    </div>

                                    {/* Details */}
                                    <div className="flex-1">

                                        {/* Title */}
                                        <div className="bg-gray-100 rounded-md px-2 py-1 text-sm font-medium leading-snug">
                                            {inv.plan_name}
                                        </div>

                                        {/* Price & Income */}
                                        <div className="mt-3 text-sm text-gray-500">
                                            <div className="flex justify-between">
                                                <span>Price</span>
                                                <span className="text-black">{Number(inv.price).toFixed(2)}</span>
                                            </div>
                                            <div className="flex justify-between mt-1">
                                                <span>Income</span>
                                                <span className="text-black">{Number(inv.income).toFixed(2)}</span>
                                            </div>
                                        </div>

                                        {/* Progress button */}
                                        {!inv.is_completed && (
                                            <div className="flex justify-end mt-3">
                                                <button
                                                    onClick={() => handleCrawl(inv.id)}
                                                    className="bg-black text-white text-xs px-4 py-1 rounded-full active:scale-95 transition-transform">
                                                    To complete
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center text-gray-400 mt-10 text-sm">
                            {activeTab === "progress" ? "No tasks in progress" : "No completed tasks"}
                        </div>
                    )}
                </div>
            </div>

            {/* Bottom Navbar */}
            <Navbar />
        </div>
    )
}
