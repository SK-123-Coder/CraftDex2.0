// Supabase config
import supabase from '../supabaseConfig'

// Dependencies
import { useState } from "react";


function UpdatePassword(){

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            return;
        }

        setLoading(true);

        const { error } = await supabase.auth.updateUser({
            password,
        });

        if (error) {
            alert(error.message);
            setLoading(false);
            return;
        }

        alert("Password updated successfully!");

        setLoading(false);

        // navigate("/login");
    };

    return(
        <div>
            <section className="min-h-screen flex items-start md:items-center pt-20 md:pt-0 justify-center px-4 sm:px-6 lg:px-8 py-10">
                <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg rounded-2xl border border-[#1B2B45] bg-[#050B18]/80 backdrop-blur-md p-6 sm:p-8 lg:p-10 shadow-2xl">

                    <span className="inline-flex items-center rounded-full border border-[#1B2B45] bg-[#0B1220] px-4 py-1 text-xs sm:text-sm font-medium text-[#60A5FA]">
                        CHANGE PASSWORD
                    </span>

                    <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F8FAFC]">
                        Create New Password
                    </h1>

                    <p className="mt-3 text-sm sm:text-base leading-6 text-[#94A3B8]">
                        Enter your new password below. Make sure it is strong and easy for you to remember.
                    </p>

                    <form onSubmit={handleSubmit} className="mt-8 space-y-5">

                        <div>
                            <label className="mb-2 block text-sm font-medium text-[#CBD5E1]">
                                New Password
                            </label>

                            <input
                                type="password"
                                placeholder="Enter new password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full rounded-xl border border-[#1B2B45] bg-[#0B1220] px-4 py-3 text-white placeholder:text-[#64748B] outline-none transition focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-[#CBD5E1]">
                                Confirm Password
                            </label>

                            <input
                                type="password"
                                placeholder="Confirm new password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                className="w-full rounded-xl border border-[#1B2B45] bg-[#0B1220] px-4 py-3 text-white placeholder:text-[#64748B] outline-none transition focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full rounded-xl bg-[#3B82F6] py-3 font-semibold text-white transition hover:bg-[#2563EB] active:scale-[0.98] disabled:opacity-50"
                        >
                            {loading ? "Updating..." : "Update Password"}
                        </button>

                    </form>

                    <div className="mt-6 text-center">
                        <a
                            href="/login"
                            className="text-[#3B82F6] hover:underline"
                        >
                            Back to Login
                        </a>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default UpdatePassword;