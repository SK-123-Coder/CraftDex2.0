// Dependencies
import { useState } from "react";

// Supabase config
import supabase from '../supabaseConfig'

function AccountRecovery(){

    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        const { error } = await supabase.auth.resetPasswordForEmail(email, {
            redirectTo: "http://localhost:5173/update-password", // Change to your frontend URL
        });

        if (error) {
            alert(error.message);
            setLoading(false);
            return;
        }

        alert("Password reset link has been sent to your email.");

        setLoading(false);
    };

    return(
        <div>
            {/* Account Recovery Section */}
            <section className="min-h-screen flex items-start md:items-center pt-20 md:pt-0 justify-center px-4 sm:px-6 lg:px-8 py-10">
            <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg rounded-2xl border border-[#1B2B45] bg-[#050B18]/80 backdrop-blur-md p-6 sm:p-8 lg:p-10 shadow-2xl">

                {/* Badge */}
                <span className="inline-flex items-center rounded-full border border-[#1B2B45] bg-[#0B1220] px-4 py-1 text-xs sm:text-sm font-medium text-[#60A5FA]">
                ACCOUNT RECOVERY
                </span>

                {/* Heading */}
                <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F8FAFC]">
                Forgot Password?
                </h1>

                {/* Description */}
                <p className="mt-3 text-sm sm:text-base leading-6 text-[#94A3B8]">
                Enter the email address associated with your account and we'll send you a
                password reset link.
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="mt-8 space-y-5">

                    <div>
                        <label className="mb-2 block text-sm font-medium text-[#CBD5E1]">
                            Email Address
                        </label>

                        <input
                            type="email"
                            placeholder="john@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full rounded-xl border border-[#1B2B45] bg-[#0B1220] px-4 py-3 text-white placeholder:text-[#64748B] outline-none transition focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full rounded-xl bg-[#3B82F6] py-3 font-semibold text-white transition hover:bg-[#2563EB] active:scale-[0.98] disabled:opacity-50"
                    >
                        {loading ? "Sending..." : "Send Reset Link"}
                    </button>

                </form>

                {/* Divider */}
                <div className="my-6 flex items-center">
                <div className="h-px flex-1 bg-[#1B2B45]" />
                <span className="px-4 text-xs sm:text-sm text-[#64748B]">
                    OR
                </span>
                <div className="h-px flex-1 bg-[#1B2B45]" />
                </div>

                {/* Alternative Action */}
                <button className="w-full rounded-xl border border-[#1B2B45] bg-[#0B1220] py-3 font-medium text-[#CBD5E1] transition hover:bg-[#101B30]">
                Continue with Google
                </button>

                {/* Footer */}
                <div className="mt-6 flex flex-col items-center gap-2 text-sm">
                <p className="text-[#94A3B8]">
                    Remember your password?{" "}
                    <a href="/login" className="text-[#3B82F6] hover:underline">
                    Login
                    </a>
                </p>

                <p className="text-[#94A3B8]">
                    Don't have an account?{" "}
                    <a href="/signup" className="text-[#3B82F6] hover:underline">
                    Create Account
                    </a>
                </p>
                </div>

            </div>
            </section>
        </div>
    )
}

export default AccountRecovery