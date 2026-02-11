import Home from '@mui/icons-material/Home';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PeopleIcon from '@mui/icons-material/People';
import DiamondIcon from '@mui/icons-material/Diamond';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { Link } from '@inertiajs/react';

export default function Navbar() {
    return (
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[720px] bg-green-600 text-white z-50">
            <div className="flex justify-around items-center py-3">

                <Link href="/dashboard" className="flex flex-col items-center text-xs hover:opacity-80">
                    <Home size={20} />
                    <span>Home</span>
                </Link>

                <Link href="/task" className="flex flex-col items-center text-xs hover:opacity-80">
                    <AssignmentIcon size={20} />
                    <span>Task</span>
                </Link>

                <Link href="/team" className="flex flex-col items-center text-xs hover:opacity-80">
                    <PeopleIcon size={20} />
                    <span>Team</span>
                </Link>

                <Link href="/vip" className="flex flex-col items-center text-xs hover:opacity-80">
                    <DiamondIcon size={20} />
                    <span>VIP</span>
                </Link>

                <Link href="/mine" className="flex flex-col items-center text-xs hover:opacity-80">
                    <AccountBalanceWalletIcon size={20} />
                    <span>Me</span>
                </Link>

            </div>
        </div>
    );
}