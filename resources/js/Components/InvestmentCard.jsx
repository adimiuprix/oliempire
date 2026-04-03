import { router } from "@inertiajs/react";

export default function InvestmentCard({ plan }) {
    const handleOrder = () => {
        if (!confirm(`Are you sure you want to buy the ${plan.name} for $${plan.price}?`)) {
            return;
        }

        router.post('/order', {
            plan_id: plan.id,
        }, {
            preserveScroll: true,
            onSuccess: () => {
                alert("Order placed successfully");
            },
            onError: (errors) => {
                alert(errors.plan_id || "Something went wrong.");
            }
        });
    }
    return (
        <div className="w-full rounded-2xl bg-gray-200 p-4 shadow-lg">
            {/* Image */}
            <div className="overflow-hidden rounded-xl">
                <img
                    src={plan.image}
                    alt="Investment Plan"
                    className="h-36 w-full object-cover"
                />
            </div>

            {/* Plan title box */}
            <div className="mt-3 rounded-md bg-gray-300 px-3 py-2 text-sm font-semibold text-gray-800">
                {plan.name}
            </div>

            {/* Footer text */}
            <p className="mt-3 text-xs text-gray-600">Order commission</p>

            {/* Price and Buy Button */}
            <div className="mt-4 flex items-center justify-between">
                <p className="text-lg font-bold text-green-700">${plan.price}</p>
                <button
                    onClick={handleOrder}
                    className="rounded-lg bg-green-700 px-5 py-2 text-sm font-bold text-white shadow-md active:scale-95 transition-all">
                    Order Now
                </button>
            </div>
        </div>
    );
}