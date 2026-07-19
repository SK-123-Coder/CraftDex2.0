// Supabase config
import supabase from '../supabaseConfig'

// Dependencies
import { useState } from "react";

function SignupPage(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
        data: {
            name,
        },
        },
    });

    if (error) {
        alert(error.message);
        setLoading(false);
        return;
    }

    alert("Account created successfully!");
    console.log(data);
    };

    return(
        <div>
            {/* Sign Up Section */}
            <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-10">
            <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg rounded-2xl border border-[#1B2B45] bg-[#050B18]/80 backdrop-blur-md p-6 sm:p-8 lg:p-10 shadow-2xl">

                {/* Badge */}
                <span className="inline-flex items-center rounded-full border border-[#1B2B45] bg-[#0B1220] px-4 py-1 text-xs sm:text-sm font-medium text-[#60A5FA]">
                JOIN CRAFTDEX
                </span>

                {/* Heading */}
                <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F8FAFC]">
                Create Your Account
                </h1>

                {/* Description */}
                <p className="mt-3 text-sm sm:text-base leading-6 text-[#94A3B8]">
                Join thousands of developers discovering curated resources, projects, and
                modern technologies.
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">

                {/* Full Name */}
                <div>
                    <label className="mb-2 block text-sm font-medium text-slate-300">
                    Full Name
                    </label>

                    <input
                    type="text"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-xl border border-slate-700 bg-slate-800/70 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20"
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="mb-2 block text-sm font-medium text-slate-300">
                    Email Address
                    </label>

                    <input
                    type="email"
                    placeholder="john@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-slate-700 bg-slate-800/70 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20"
                    />
                </div>

                {/* Password */}
                <div>
                    <label className="mb-2 block text-sm font-medium text-slate-300">
                    Password
                    </label>

                    <input
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-xl border border-slate-700 bg-slate-800/70 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20"
                    />
                </div>

                {/* Button */}
                <button
                    disabled={loading}
                    type="submit"
                    className="w-full rounded-xl bg-[#3B82F6] py-3 font-semibold text-white transition hover:bg-[#2563EB] active:scale-[0.98]"
                >
                    <span className="relative z-10">
                    {loading ? "Creating Account..." : "Create Account"}
                    </span>

                    <span className="absolute inset-0 -translate-x-full bg-white/10 transition-transform duration-700 group-hover:translate-x-0"></span>
                </button>

                </form>

                {/* Divider */}
                <div className="my-6 flex items-center">
                <div className="h-px flex-1 bg-[#1B2B45]" />
                <span className="px-4 text-xs sm:text-sm text-[#64748B]">OR</span>
                <div className="h-px flex-1 bg-[#1B2B45]" />
                </div>

                {/* Google */}
                <button className="w-full rounded-xl border border-[#1B2B45] bg-[#0B1220] py-3 font-medium text-[#CBD5E1] transition hover:bg-[#101B30]">
                Continue with Google
                </button>

                {/* Footer */}
                <p className="mt-6 text-center text-sm text-[#94A3B8]">
                Already have an account?{" "}
                <a href="/login" className="text-[#3B82F6] hover:underline">
                    Login
                </a>
                </p>

            </div>
            </section>
        </div>
    )
}

export default SignupPage