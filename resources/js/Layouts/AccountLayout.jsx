import { router } from '@inertiajs/react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function AccountLayout({ children, title }) {
    const handleBack = () => {
        if (window.history.length > 1) {
            window.history.back();
        } else {
            router.visit('/dashboard');
        }
    };

    return (
        <div className="w-full max-w-[720px] mx-auto bg-gray-100 min-h-screen relative overflow-x-hidden shadow-2xl">
            <div className="w-full bg-green-700 h-10 flex items-center justify-center relative text-white">
                {/* Back Button */}
                <button onClick={handleBack} className="absolute left-4 text-white">
                    <ArrowBackIosIcon sx={{ fontSize: 18 }} />
                </button>
                <p>{title ?? 'app.layout.title'}</p>
            </div>
            {children}
        </div>
    );
}
