import AccountLayout from '../../Layouts/AccountLayout';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from '@inertiajs/react';

export default function SelectRecharge({ coins }) {
    const networks = coins.map(coin => ({
        name: coin.name,
        icon: `/images/coins/${coin.icon.toLowerCase()}`
    }));

    return (
        <div className="w-full rounded-2xl px-8 py-6 text-black">
            <div className="bg-gray-200 rounded-xl overflow-hidden">
                {networks.map((item, index) => (
                    <Link
                        key={index}
                        href={`/account/recharge/${item.name}`}
                        className={`flex items-center justify-between py-4 px-4 ${index !== networks.length - 1
                            ? "border-b border-dashed border-black/30"
                            : ""
                            }`}
                    >

                        <div className="flex items-center gap-3">
                            <img
                                src={item.icon}
                                alt={item.name}
                                className="w-7 h-7 rounded-full object-contain"
                            />
                            <span className="font-medium">{item.name}</span>
                        </div>
                        <ArrowForwardIosIcon className="w-4 h-4 text-black/70" />
                    </Link>
                ))}
            </div>
        </div>
    )
}

SelectRecharge.layout = (page) => <AccountLayout title="Select Recharge">{page}</AccountLayout>;
