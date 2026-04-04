import AccountLayout from '../../Layouts/AccountLayout';

export default function Balance({ balance, profit_balance }) {
    return (
        <div className="w-full rounded-2xl px-8 py-6 text-black">
            <div className="bg-gray-200 rounded-2xl px-8 py-6 flex items-center justify-between">
                {/* Left Content */}
                <div className="space-y-6">
                    {/* Basic Account */}
                    <div>
                        <p className="text-gray-500 text-sm mb-1">Main balance</p>
                        <p className="text-xl font-semibold">{Number(balance).toFixed(2)} <span className="text-green-600 font-bold">USDT</span>
                        </p>
                    </div>

                    {/* Profit Balance */}
                    <div>
                        <p className="text-gray-500 text-sm mb-1">Profit balance</p>
                        <p className="text-xl font-semibold">{Number(profit_balance).toFixed(2)} <span className="text-green-600 font-bold">USDT</span></p>
                    </div>
                </div>

                {/* Right Image */}
                <div className="ml-6">
                    <img src="/images/wallet.png" alt="Wallet Illustration" className="w-24 h-24 object-contain" />
                </div>
            </div>
        </div>
    )
}

Balance.layout = (page) => <AccountLayout title="Balance">{page}</AccountLayout>;

