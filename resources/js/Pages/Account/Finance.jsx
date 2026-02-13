import * as Tabs from "@radix-ui/react-tabs";
import AccountLayout from '../../Layouts/AccountLayout';

export default function Finance() {
    const transactions = [
        {
            title: "System reduction",
            date: "09/02/2026 20:36:57",
            amount: -4.0,
        },
        {
            title: "System increase",
            date: "08/02/2026 21:34:37",
            amount: 7.7,
        },
    ];
    return (
        <div className="w-full rounded-2xl px-8 py-6 text-black">
            <div className="bg-gray-200 rounded-2xl px-8 py-6">
                <Tabs.Root defaultValue="basic" className="w-full">
                    {/* Header */}
                    <Tabs.List className="flex justify-between items-center mb-6">
                        {/* Tab Triggers */}
                        <Tabs.Trigger
                            value="basic"
                            className="data-[state=active]:text-base data-[state=active]:font-medium data-[state=inactive]:text-gray-600 data-[state=inactive]:text-sm data-[state=inactive]:cursor-pointer transition-all"
                        >
                            Basic account
                        </Tabs.Trigger>
                        <Tabs.Trigger
                            value="withdrawal"
                            className="data-[state=active]:text-base data-[state=active]:font-medium data-[state=inactive]:text-gray-600 data-[state=inactive]:text-sm data-[state=inactive]:cursor-pointer transition-all"
                        >
                            Withdrawal account
                        </Tabs.Trigger>
                    </Tabs.List>

                    {/* Transaction List Content */}
                    <Tabs.Content value="basic" className="outline-hidden">
                        <div className="space-y-6">
                            {transactions.map((item, index) => (
                                <div key={index} className="flex justify-between items-start">
                                    <div>
                                        <p className="text-sm font-medium">
                                            {item.title}
                                        </p>
                                        <p className="text-xs text-gray-500 mt-1">
                                            {item.date}
                                        </p>
                                    </div>

                                    <div
                                        className={`text-sm font-medium ${item.amount < 0
                                            ? "text-red-500"
                                            : "text-green-500"
                                            }`}
                                    >
                                        {item.amount < 0 ? "-" : ""}
                                        {Math.abs(item.amount).toFixed(2)} USDT
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Tabs.Content>

                    <Tabs.Content value="withdrawal" className="outline-hidden">
                        {/* Placeholder content for Withdrawal account */}
                        <div className="flex flex-col items-center justify-center py-10 text-gray-400">
                            <p className="text-sm">No transaction records</p>
                        </div>
                    </Tabs.Content>
                </Tabs.Root>
            </div>
        </div>
    );
}

Finance.layout = (page) => <AccountLayout title="Financial Records">{page}</AccountLayout>;
