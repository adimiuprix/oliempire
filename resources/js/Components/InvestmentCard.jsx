export default function InvestmentCard() {
    return (
        <div className="w-full max-w-sm rounded-2xl bg-gray-200 p-4 shadow-lg">
            {/* Image */}
            <div className="overflow-hidden rounded-xl">
                <img
                    src="/images/investment.jpg"
                    alt="Investment Plan"
                    className="h-36 w-full object-cover"
                />
            </div>

            {/* Plan title box */}
            <div className="mt-3 rounded-md bg-gray-300 px-3 py-2 text-sm font-semibold text-gray-800">
                Investment Plan 10
            </div>

            {/* Footer text */}
            <p className="mt-3 text-xs text-gray-600">Order commission</p>

            {/* Price */}
            <p className="text-lg font-semibold text-green-700">$2,950.00</p>
        </div>
    );
}