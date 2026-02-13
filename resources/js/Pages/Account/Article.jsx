import AccountLayout from '../../Layouts/AccountLayout';

export default function Article() {
    return (
        <div className="w-full rounded-2xl px-8 py-6 text-black">
            <div className="bg-gray-200 rounded-2xl px-8 py-6">

                {/* Image */}
                <div className="flex justify-center mb-6">
                    <img
                    src="/images/article.webp"
                    alt="Oman Sustainability Week Awards"
                    className="max-w-md w-full object-cover"
                    />
                </div>

                {/* Title */}
                <h2 className="text-red-500 font-semibold text-lg mb-4">
                    How to earn more wealth?
                </h2>

                <p className="mb-4">
                    Building a strong team is the most effective and fastest way to create wealth.
                    Simply spend a minute sharing your registration link to build a powerful team.
                </p>

                <p className="mb-4">
                    With a strong team, you can get generous team discounts.
                </p>

                <p className="mb-4">
                    Share your referral link on any social media platform or software, and your
                    team members will receive a 21% team rebate every time they make a recharge.
                </p>

                <p className="mb-4">
                    The rebates for a three-tier team are as follows:
                </p>

                {/* Rebate list */}
                <div className="space-y-3 mb-6">
                    <p>
                    Level 1 Team Rebate: <span className="text-red-500">18%</span>
                    </p>
                    <p>
                    Level 2 team rebate: <span className="text-red-500">3%</span>
                    </p>
                    <p>
                    Level 3 team rebate: <span className="text-red-500">2%</span>
                    </p>
                </div>

                {/* Example */}
                <h3 className="font-semibold mb-3">For example:</h3>

                <div className="space-y-4">
                    <p>
                    If you invite member A to deposit 1000 USDT, your rebate will be:
                    1000 * 18% = 180 USDT;
                    </p>

                    <p>
                    If member A invites member B to deposit 1000 USDT, your rebate will be:
                    1000 * 3% = 30 USDT;
                    </p>

                    <p>
                    If member B invites member C to deposit 1000 USDT, your rebate will be:
                    1000 * 2% = 20 USDT;
                    </p>
                </div>
            </div>
        </div>
    );
}

Article.layout = (page) => <AccountLayout title="Article">{page}</AccountLayout>;
