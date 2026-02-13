import AccountLayout from '../../Layouts/AccountLayout';

export default function Company() {
    return (
        <div className="w-full rounded-2xl px-8 py-6 text-black">
            <div className="bg-gray-200 rounded-2xl px-8 py-6">

                {/* Title */}
                <h2 className="text-xl font-semibold mb-6">About Us Group</h2>

                {/* Image */}
                <div className="flex justify-center mb-6">
                    <img
                    src="/images/banner.webp"
                    alt="Oman Sustainability Week Awards"
                    className="max-w-md w-full object-cover"
                    />
                </div>

                {/* Paragraph */}
                <p className="mb-6 leading-relaxed">
                    Petroleum Development Oman (PDO) is the leading oil and gas exploration and production company in the Sultanate of Oman, producing approximately 70% of the country's crude oil and almost all of its natural gas. Founded in 1937, the company manages about one-third of Oman's territory, operating over 200 oil fields and 55 gas fields. Its shareholders are the Omani government (60%), Shell (34%), Total (4%), and Partex (2%).
                </p>

                {/* Section Title */}
                <h3 className="font-semibold mb-4">
                    Key information summary:
                </h3>

                {/* Key Points */}
                <div className="space-y-4">
                    <p>
                        <span className="font-semibold">
                            Status:
                        </span>{" "}
                        Oman's most important energy company and one of the region's largest oil and gas operators.
                    </p>

                    <p>
                        <span className="font-semibold">
                            Scale:
                        </span>{" "}
                        It operates over a vast area (approximately 90,000 square kilometers), has about 9,000 active oil wells, and employs a large number of staff and contractors.
                    </p>

                    <p>
                        <span className="font-semibold">
                            Key milestones:
                        </span>{" "}
                        First commercially viable oil discovery in 1962, first crude oil export in 1967.
                    </p>

                    <p>
                        <span className="font-semibold">
                            Business objective:
                        </span>{" "}
                        To commit to efficient oil and gas production and actively promote sustainable development, aiming to meet Oman's net-zero emissions target by 2050.
                    </p>

                    <p>
                        <span className="font-semibold">
                            Shareholder structure:
                        </span>{" "}
                        The Omani government holds a 60% controlling stake, while foreign shareholders include Shell, Total, and Partex.
                    </p>
                </div>

                {/* Closing paragraph */}
                <p className="mt-6 leading-relaxed">
                    PDO plays a pivotal role in Oman's economy, contributing significantly to its oil and gas production and playing a crucial role in energy transition and carbon reduction.
                </p>

            </div>
        </div>
    );
}

Company.layout = (page) => <AccountLayout>{page}</AccountLayout>;
