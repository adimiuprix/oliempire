export default function LevelTeam() {
    return (
        <div className="w-full bg-gray-200 rounded-2xl px-8 py-6 text-black shadow-sm">
            {/* Top Section */}
            <div className="flex justify-between items-start">
                <div className="flex gap-2">
                    <span className="text-sm opacity-90">Account</span>
                    <span className="text-sm font-medium">rus.***********com</span>
                </div>
            </div>
            {/* Middle Stats */}
            <div className="flex justify-between text-center mt-3">
                <div className="flex-1">
                    <p className="text-sm opacity-90">Recharge amount</p>
                    <p className="text-xl font-medium mt-1">7.70</p>
                </div>

                <div className="flex-1">
                    <p className="text-sm opacity-90">Recharge rebate</p>
                    <p className="text-xl font-medium mt-1">1.38</p>
                </div>

                <div className="flex-1">
                    <p className="text-sm opacity-90">Task rebate</p>
                    <p className="text-xl font-medium mt-1">0</p>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="flex justify-end mt-3">
                <p className="text-sm opacity-90">
                Joining time&nbsp;&nbsp;
                <span className="font-medium">10/02/2026 13:18:57</span>
                </p>
            </div>
        </div>
    )
}
