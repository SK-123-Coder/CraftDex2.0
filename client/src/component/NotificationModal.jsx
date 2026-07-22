// Used for notification success, filed, inavlid etc

export default function NotificationModal({
    isOpen,
    onClose,
    title,
    message,
    type = "info",
    buttonText = "OK",
}) {
    if (!isOpen) return null;

    const icons = {
        success: (
            <svg
                className="w-14 h-14 text-green-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
            >
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12l3 3 5-5" />
            </svg>
        ),
        error: (
            <svg
                className="w-14 h-14 text-red-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
            >
                <circle cx="12" cy="12" r="10" />
                <path d="M15 9l-6 6M9 9l6 6" />
            </svg>
        ),
        warning: (
            <svg
                className="w-14 h-14 text-yellow-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
            >
                <path d="M12 3L2 21h20L12 3z" />
                <path d="M12 9v4" />
                <circle cx="12" cy="17" r="1" fill="currentColor" />
            </svg>
        ),
        info: (
            <svg
                className="w-14 h-14 text-blue-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
            >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <circle cx="12" cy="8" r="1" fill="currentColor" />
            </svg>
        ),
    };

    const buttonColors = {
        success: "bg-green-500 hover:bg-green-600",
        error: "bg-red-500 hover:bg-red-600",
        warning: "bg-yellow-500 hover:bg-yellow-600",
        info: "bg-blue-500 hover:bg-blue-600",
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#020617]/80 backdrop-blur-md px-4">
            <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-[#1B2B45] bg-gradient-to-br from-[#08111F] to-[#0B1220] shadow-[0_20px_80px_rgba(0,0,0,.55)]">

                {/* Top Glow */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-500"></div>

                {/* Close */}
                <button
                    onClick={onClose}
                    className="absolute right-5 top-5 rounded-lg p-2 text-slate-500 transition hover:bg-white/5 hover:text-white"
                >
                    ✕
                </button>

                <div className="px-8 py-10">

                    {/* Icon */}
                    <div
                        className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full border
                        ${
                            type === "success"
                                ? "border-green-500/30 bg-green-500/10"
                                : type === "error"
                                ? "border-red-500/30 bg-red-500/10"
                                : type === "warning"
                                ? "border-yellow-500/30 bg-yellow-500/10"
                                : "border-blue-500/30 bg-blue-500/10"
                        }`}
                    >
                        {icons[type]}
                    </div>

                    {/* Title */}
                    <h2 className="mt-7 text-center text-3xl font-bold tracking-tight text-white">
                        {title}
                    </h2>

                    {/* Message */}
                    <p className="mt-4 text-center leading-7 text-slate-400">
                        {message}
                    </p>

                    {/* Divider */}
                    <div className="my-8 h-px bg-gradient-to-r from-transparent via-[#1B2B45] to-transparent"></div>

                    {/* Button */}
                    <button
                        onClick={onClose}
                        className={`w-full rounded-xl py-3.5 font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-95 ${buttonColors[type]}`}
                    >
                        {buttonText}
                    </button>
                </div>
            </div>
        </div>
    );
}