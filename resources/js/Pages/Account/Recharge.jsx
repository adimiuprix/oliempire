import Navbar from '../../Components/Navbar';
import AccountLayout from '../../Layouts/AccountLayout';
import { ReactQRCode } from '@lglab/react-qr-code'

export default function Recharge({ network, address }) {

    return (
        <div>
            <div className="flex justify-center px-4">
                <div className="w-full max-w-md flex flex-col gap-6">
                    <div className="p-6 flex flex-col items-center">
                        <div className="flex items-center gap-3 mb-4">
                            <h2 className="text-lg font-semibold text-gray-800">{network}</h2>
                        </div>
                        <div className="w-44 h-44 flex items-center justify-center bg-gray-200 rounded-xl border">
                            <ReactQRCode value={address} size={176} />
                        </div>
                        <div className="text-center text-lg font-bold text-gray-800 pt-3">
                            Address
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-4 pb-20">
                <div className="flex flex-col items-center gap-6">
                    <div className="w-full bg-gray-200 rounded-2xl px-8 py-6 text-black shadow-sm">
                        <div className="flex flex-col gap-5">
                            <div className="flex items-center gap-3">
                                <img src="" alt="logo" draggable="false" className="w-10 h-10 rounded-full object-cover" />
                                <span className="text-sm font-medium text-gray-800">Petroleum Development Oman</span>
                            </div>
                            <div className="flex items-center justify-between bg-gray-100 rounded-lg px-4 py-3">
                                <span className="text-sm text-gray-500 truncate">{address}</span>
                                <button onClick={() => navigator.clipboard.writeText(address)} className="bg-black text-white text-xs px-3 py-1 rounded-md">Copy</button>
                            </div>
                            <button className="w-full bg-green-500 hover:bg-green-600 transition text-white py-3 rounded-full font-medium">Recharge completed</button>
                        </div>
                    </div>
                </div>
            </div>

            <Navbar />
        </div>
    )
}

Recharge.layout = (page) => <AccountLayout title="Recharge">{page}</AccountLayout>;
