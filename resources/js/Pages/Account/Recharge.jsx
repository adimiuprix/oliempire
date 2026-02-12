import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Navbar from '../../Components/Navbar';

export default function Recharge() {
    return (
        <div className="w-full max-w-[720px] mx-auto bg-gray-100 min-h-screen relative overflow-x-hidden shadow-2xl">

            <div className="w-full bg-green-700 h-10 flex items-center justify-center relative text-white">
                {/* Back Button */}
                <button className="absolute left-4 text-white">
                    <ArrowBackIosIcon size={22} />
                </button>
                <p>ruyruyrt6uyrt6</p>
            </div>

            <div className="min-h-screen bg-gray-100 flex items-start justify-center pt-16 px-4">
  <div className="w-full max-w-md flex flex-col gap-6">

    {/* Kotak 1 */}
    <div className="bg-white rounded-2xl p-6 flex flex-col items-center shadow-sm">

      <div className="flex items-center gap-3 mb-4">
        <img
          src="/images/troncoin.webp"
          alt="coin logo"
          className="w-9 h-9 object-contain"
        />
        <h2 className="text-lg font-semibold text-gray-800">TRX</h2>
      </div>

      <div className="w-44 h-44 flex items-center justify-center bg-gray-200 rounded-xl border">
        <img
          alt="Scan me!"
          src="data:image/png;base64,...."
          className="w-40 h-40 object-contain"
        />
      </div>

      <div className="text-center text-lg font-bold text-gray-800 pt-3">
        Address
      </div>

    </div>

    {/* Kotak 2 */}
    <div className="bg-white rounded-2xl p-6 shadow-sm">

      <div className="flex flex-col gap-5">

        <div className="flex items-center gap-3">
          <img
            src="https://api.oilempire.cc/upload/img/69888727298f.webp"
            alt="logo"
            draggable="false"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="text-sm font-medium text-gray-800">
            Petroleum Development Oman
          </span>
        </div>

        <div className="flex items-center justify-between bg-gray-100 rounded-lg px-4 py-3">
          <span className="text-sm text-gray-500 truncate">
            TNAz2KUV2NayzR3XwVRgdQa28J2GP4XmHS
          </span>

          <button className="bg-black text-white text-xs px-3 py-1 rounded-md">
            Copy
          </button>
        </div>

        <button className="w-full bg-green-500 hover:bg-green-600 transition text-white py-3 rounded-full font-medium">
          Recharge completed
        </button>

      </div>

    </div>

  </div>
</div>



            <Navbar />
        </div>
    )
}
