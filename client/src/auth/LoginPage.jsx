// Supabase config
import supabase from '../supabaseConfig'

// Dependencies
import { useState } from "react";

function LoginPage(){

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
        alert(error.message);
        setLoading(false);
        return;
    }

    alert("Login successful!");

    console.log(data);

    setLoading(false);

    // Example (React Router)
    // navigate("/dashboard");
    };

    return(
        <div>
            {/* Login Section */}
            <section className="min-h-screen flex items-start justify-start md:items-center md:justify-center px-4 sm:px-6 lg:px-8 py-10">

                <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg rounded-2xl border border-[#1B2B45] bg-[#050B18]/80 backdrop-blur-md p-6 sm:p-8 lg:p-10 shadow-2xl">

                    {/* Badge */}
                    <span className="inline-flex items-center rounded-full border border-[#1B2B45] bg-[#0B1220] px-4 py-1 text-xs sm:text-sm font-medium text-[#60A5FA]">
                    WELCOME BACK
                    </span>

                    {/* Heading */}
                    <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F8FAFC]">
                    Sign In
                    </h1>

                    {/* Description */}
                    <p className="mt-3 text-sm sm:text-base leading-6 text-[#94A3B8]">
                    Log in to access your account, manage your projects, and continue your development journey.
                    </p>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="mt-8 space-y-5">

                    <div>
                        <label className="mb-2 block text-sm font-medium text-[#CBD5E1]">
                        Email Address
                        </label>
                        <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="john@example.com"
                        className="w-full rounded-xl border border-[#1B2B45] bg-[#0B1220] px-4 py-3 text-white placeholder:text-[#64748B] outline-none transition focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20"
                        />
                    </div>

                    <div>
                        <div className="mb-2 flex items-center justify-between">
                        <label className="text-sm font-medium text-[#CBD5E1]">
                            Password
                        </label>

                        <a
                            href="accountrecovery"
                            className="text-sm text-[#3B82F6] hover:underline"
                        >
                            Forgot Password?
                        </a>
                        </div>

                        <input
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full rounded-xl border border-[#1B2B45] bg-[#0B1220] px-4 py-3 text-white placeholder:text-[#64748B] outline-none transition focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20"
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <label className="flex items-center gap-2 text-sm text-[#CBD5E1]">
                        <input
                            type="checkbox"
                            className="h-4 w-4 rounded border-[#1B2B45] bg-[#0B1220]"
                        />
                        Remember me
                        </label>
                    </div>

                    <button
                        disabled={loading}
                        type="submit"
                        className="w-full rounded-xl bg-[#3B82F6] py-3 font-semibold text-white transition hover:bg-[#2563EB] active:scale-[0.98]"
                    >
                        {loading ? "Signing In..." : "Login"}
                    </button>
                    </form>

                    {/* Divider */}
                    <div className="my-6 flex items-center">
                        <div className="h-px flex-1 bg-[#1B2B45]" />
                        <span className="px-4 text-xs sm:text-sm text-[#64748B]">OR</span>
                        <div className="h-px flex-1 bg-[#1B2B45]" />
                    </div>

                    {/* Google Login */}
                    <button className="w-full rounded-xl border border-[#1B2B45] bg-[#0B1220] py-3 font-medium text-[#CBD5E1] transition hover:bg-[#101B30]">
                    Continue with Google
                    </button>

                    {/* Footer */}
                    <p className="mt-6 text-center text-sm text-[#94A3B8]">
                    Don't have an account?{" "}
                        <a href="/signup" className="text-[#3B82F6] hover:underline">
                            Create Account
                        </a>
                    </p>

                </div>

            </section>
        </div>
    )
}

export default LoginPage