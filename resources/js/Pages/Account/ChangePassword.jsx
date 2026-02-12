import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function ChangePassword(){
    return(
        <>
        <div className="w-full max-w-[720px] mx-auto bg-gray-100 min-h-screen relative overflow-x-hidden shadow-2xl">
            <div className="w-full bg-green-700 h-10 flex items-center justify-center relative text-white">
                {/* Back Button */}
                <button className="absolute left-4 text-white">
                    <ArrowBackIosIcon size={22} />
                </button>
                <p>Recharge</p>
            </div>

            <div className="px-4 pb-20 pt-5">
                <div className="flex flex-col items-center gap-6">

                    <div className="w-full bg-gray-200 rounded-2xl px-8 py-6 text-black shadow-sm">

                        {/* Old Password */}
                        <div className="flex items-center justify-between border-b border-black/20 py-4">
                        <input
                            type="password"
                            placeholder="Old Password"
                            className="bg-transparent outline-none w-full text-gray-700 placeholder-gray-500"
                        />
                        <span className="ml-3">👁</span>
                        </div>

                        {/* New Password */}
                        <div className="flex items-center justify-between border-b border-black/20 py-4">
                        <input
                            type="password"
                            placeholder="New Password"
                            className="bg-transparent outline-none w-full text-gray-700 placeholder-gray-500"
                        />
                        <span className="ml-3">👁</span>
                        </div>

                        {/* Reenter Password */}
                        <div className="flex items-center justify-between border-b border-black/20 py-4 mb-6">
                        <input
                            type="password"
                            placeholder="Reenter new password"
                            className="bg-transparent outline-none w-full text-gray-700 placeholder-gray-500"
                        />
                        <span className="ml-3">👁</span>
                        </div>

                        {/* Confirm Button */}
                        <button className="w-full bg-green-500 hover:bg-green-600 text-black py-3 rounded-full font-medium">
                        Confirm
                        </button>

                    </div>

                </div>
            </div>

        </div>
        </>
    )
}
