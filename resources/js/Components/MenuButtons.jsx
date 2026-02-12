import { Link } from '@inertiajs/react';

export default function MenuButtons({ label, link = "#", Icon }) {
    return (
        <Link href={link} className="w-full block hover:opacity-90 transition-opacity">
            <div className="flex items-center justify-between bg-green-700 rounded-2xl px-4 py-3 shadow-sm">
                <div className="flex items-center gap-3">
                    {/* Neon bar */}
                    <div className="w-1.5 h-6 bg-green-400 rounded-full" />

                    {/* Label */}
                    <span className="text-white font-semibold text-sm tracking-wide">
                        {label}
                    </span>
                </div>

                {/* Render Icon */}
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/10">
                    {Icon && <Icon sx={{ fontSize: 18, color: "white" }} />}
                </div>
            </div>
        </Link>
    )
}