// Supabase config
import supabase from '../supabaseConfig'

// Dependencies
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Component
import NotificationModal from '../component/NotificationModal'

function LoginPage(){

    const navigate = useNavigate();

    const [modal, setModal] = useState({
        open: false,
        type: "info",
        title: "",
        message: "",
    });

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) {
        
        setModal({
        open: true,
        type: "error",
        title: "Login Failed",
        message: error.message,
        });

        setLoading(false);
        return;
    }

    setModal({
        open: true,
        type: "success",
        title: "Login Successful",
        message: "Welcome back! Redirecting to your dashboard...",
    });

    setTimeout(() => {
        navigate("/");
    }, 2000);

    setLoading(false);

    };

    return(
        <div>
            {/* Login Section */}
            <section className="min-h-screen flex items-start md:items-center justify-center px-4 sm:px-6 lg:px-8 py-10">

            <div className="w-full max-w-md lg:max-w-lg rounded-3xl border border-slate-800 bg-[#050B18]/90 backdrop-blur-xl shadow-2xl p-7 sm:p-8">

                {/* Badge */}
                <div className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1">
                <span className="text-xs font-semibold tracking-wider text-blue-400 uppercase">
                    Welcome Back
                </span>
                </div>

                {/* Heading */}
                <div className="mt-6">
                <h1 className="text-4xl font-bold tracking-tight text-white">
                    Sign In
                </h1>

                <p className="mt-3 text-slate-400 leading-relaxed">
                    Log in to continue managing your projects, collaborate with your team,
                    and access your dashboard.
                </p>
                </div>

                {/* Form */}
                <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-6"
                >

                {/* Email */}
                <div>
                    <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-300"
                    >
                    Email Address
                    </label>

                    <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@example.com"
                    className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white placeholder:text-slate-500 transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 outline-none"
                    />
                </div>

                {/* Password */}
                <div>

                    <div className="mb-2 flex items-center justify-between">

                    <label
                        htmlFor="password"
                        className="text-sm font-medium text-slate-300"
                    >
                        Password
                    </label>

                    <a
                        href="/accountrecovery"
                        className="text-sm text-blue-400 transition hover:text-blue-300"
                    >
                        Forgot Password?
                    </a>

                    </div>

                    <div className="relative">

                    <input
                        id="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 pr-12 text-white placeholder:text-slate-500 transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 outline-none"
                    />

                    </div>

                </div>

                {/* Remember Me */}
                <div className="flex items-center justify-between">

                    <label className="flex items-center gap-3 text-sm text-slate-300 cursor-pointer">

                    <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-slate-700 bg-slate-900 text-blue-500 focus:ring-blue-500"
                    />

                    Remember me

                    </label>

                </div>

                {/* Login Button */}
                <button
                    type="submit"
                    disabled={loading}
                    className="flex h-12 w-full items-center justify-center rounded-xl bg-blue-600 font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60 active:scale-[0.98]"
                >
                    {loading ? (
                    <>
                        <svg
                        className="mr-2 h-5 w-5 animate-spin"
                        viewBox="0 0 24 24"
                        fill="none"
                        >
                        <circle
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="3"
                            opacity=".25"
                        />
                        <path
                            d="M22 12a10 10 0 0 1-10 10"
                            stroke="currentColor"
                            strokeWidth="3"
                        />
                        </svg>

                        Signing In...
                    </>
                    ) : (
                    "Sign In"
                    )}
                </button>

                </form>

                {/* Divider */}
                <div className="my-8 flex items-center">

                <div className="h-px flex-1 bg-slate-700" />

                <span className="px-4 text-xs uppercase tracking-wider text-slate-500">
                    OR
                </span>

                <div className="h-px flex-1 bg-slate-700" />

                </div>

                {/* Google */}
                <button
                type="button"
                className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-700 bg-slate-900 py-3 font-medium text-slate-300 transition hover:border-slate-600 hover:bg-slate-800"
                >

                <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="Google"
                    className="h-5 w-5"
                />

                Continue with Google

                </button>

                {/* Footer */}
                <p className="mt-8 text-center text-sm text-slate-400">

                Don't have an account?{" "}

                <a
                    href="/signup"
                    className="font-medium text-blue-400 hover:text-blue-300"
                >
                    Create Account
                </a>

                </p>

            </div>

            </section>

            <NotificationModal
                isOpen={modal.open}
                type={modal.type}
                title={modal.title}
                message={modal.message}
                onClose={() =>
                setModal((prev) => ({
                    ...prev,
                    open: false,
                }))
                }
            />
        </div>
    )
}

export default LoginPage