// Dependencies
import { Link } from "react-router-dom";
import { useContext } from "react";

// Component
import NavBarSection from '../component/NavBarSection'

// Icons
import { FaArrowLeft } from "react-icons/fa";
import { FaUserCircle, FaCog, FaBell, FaLock, FaSignOutAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

// Context file
import { AuthContext } from '../context/AuthProvider.jsx'

function SettingsPage() {

    // Get session id from client browser storage
    const { session, setSession } = useContext(AuthContext);

    // ===================================================================================================================

    // For profile button content
    const fullName =
        session?.user?.user_metadata?.name ||
        session?.user?.user_metadata?.username ||
        "User";

    const initials = fullName
        .trim()
        .split(/\s+/)
        .map((word) => word[0])
        .filter(Boolean);

    const profileText =
        initials.length > 1
            ? `${initials[0]}${initials[initials.length - 1]}`
            : initials[0] || "U";

    // ===================================================================================================================

    return (
      <div>

        {/* Nav bar */}
        <NavBarSection />

        {/* Profiel section */}
        <section className="min-h-screen flex items-center justify-center px-4 py-18">
          <div className="w-full max-w-4xl">

            {/* Profile Header */}
            <div
                className="rounded-3xl border border-[#1B2B45]
                          bg-gradient-to-br from-[#0B1220] via-[#0F172A] to-[#111827]
                          p-6 sm:p-8 lg:p-10
                          shadow-xl hover:shadow-blue-500/10
                          transition-all duration-300"
            >
                <div className="flex flex-col md:flex-row items-center gap-6 lg:gap-10">

                    {/* Avatar */}
                    <div className="flex-shrink-0">
                        <div
                            className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32
                                      rounded-3xl
                                      bg-gradient-to-br from-[#2563EB] via-[#1D4ED8] to-[#1E3A8A]
                                      border-4 border-[#3B82F6]/40
                                      flex items-center justify-center
                                      shadow-lg shadow-blue-500/20"
                        >
                            <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white uppercase">
                                {profileText}
                            </span>
                        </div>
                    </div>

                    {/* User Info */}
                    <div className="flex-1 text-center md:text-left">

                        <p className="text-slate-400 text-sm uppercase tracking-[0.25em]">
                            Welcome Back
                        </p>

                        <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white break-words">
                            {session?.user?.user_metadata?.name ||
                                session?.user?.user_metadata?.username ||
                                "Developer"}
                        </h1>

                        <p className="mt-2 text-slate-400 text-sm sm:text-base break-all">
                            {session?.user?.email}
                        </p>
                    </div>

                </div>
            </div>

            {/* Personal AI Settings */}
            <div
                className="mt-10 rounded-3xl border border-[#1B2B45]
                          bg-gradient-to-br from-[#0B1220] via-[#0F172A] to-[#111827]
                          p-6 sm:p-8 lg:p-10
                          shadow-xl"
            >
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-8">

                    <div>
                        <div className="flex items-center gap-3 flex-wrap">

                            <h2 className="text-2xl sm:text-3xl font-bold text-white">
                                Personal AI
                            </h2>

                            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-red-500/10 border border-red-500/30 text-red-400">
                                Inactive
                            </span>

                        </div>

                        <p className="text-slate-400 mt-2 text-sm sm:text-base">
                            Connect your own AI provider and securely use your personal API keys.
                        </p>
                    </div>

                    <div className="self-start lg:self-auto px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium">
                        Recommended
                    </div>

                </div>

                {/* Form */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Provider */}
                    <div>
                        <label className="block mb-2 text-sm font-medium text-slate-400">
                            AI Provider
                        </label>

                        <select
                            className="w-full rounded-2xl
                                      bg-[#101B30]
                                      border border-[#1B2B45]
                                      px-5 py-4
                                      text-white
                                      outline-none
                                      transition-all
                                      focus:border-[#3B82F6]
                                      focus:ring-2 focus:ring-[#3B82F6]/20"
                        >
                            <option>OpenAI</option>
                            <option>Google Gemini</option>
                            <option>Anthropic Claude</option>
                            <option>Groq</option>
                            <option>OpenRouter</option>
                            <option>Together AI</option>
                        </select>
                    </div>

                    {/* Model */}
                    <div>
                        <label className="block mb-2 text-sm font-medium text-slate-400">
                            Default Model
                        </label>

                        <input
                            type="text"
                            placeholder="gpt-4o-mini"
                            className="w-full rounded-2xl
                                      bg-[#101B30]
                                      border border-[#1B2B45]
                                      px-5 py-4
                                      text-white
                                      placeholder:text-slate-500
                                      outline-none
                                      transition-all
                                      focus:border-[#3B82F6]
                                      focus:ring-2 focus:ring-[#3B82F6]/20"
                        />
                    </div>

                </div>

                {/* API Key */}
                <div className="mt-8">

                    <label className="block mb-2 text-sm font-medium text-slate-400">
                        API Key
                    </label>

                    <div className="relative">

                        <input
                            type="password"
                            placeholder="sk-••••••••••••••••••••••••••••"
                            className="w-full rounded-2xl
                                      bg-[#101B30]
                                      border border-[#1B2B45]
                                      px-5 py-4 pr-24
                                      text-white
                                      placeholder:text-slate-500
                                      outline-none
                                      transition-all
                                      focus:border-[#3B82F6]
                                      focus:ring-2 focus:ring-[#3B82F6]/20"
                        />

                        {/* Future Show/Hide Button */}
                        <button
                            type="button"
                            className="absolute right-3 top-1/2 -translate-y-1/2
                                      text-sm text-slate-400
                                      hover:text-white transition"
                        >
                            Show
                        </button>

                    </div>

                    <p className="mt-3 text-xs text-slate-500 leading-6">
                        Your API key is encrypted before storage and is only used to send
                        requests on your behalf. It is never exposed to other users.
                    </p>

                </div>

                {/* Buttons */}
                <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-4">

                    <button
                        className="rounded-2xl
                                  bg-[#3B82F6]
                                  hover:bg-[#2563EB]
                                  px-8 py-4
                                  font-semibold
                                  text-white
                                  shadow-lg shadow-blue-500/20
                                  transition-all
                                  active:scale-95"
                    >
                        Save Configuration
                    </button>

                    <button
                        className="rounded-2xl
                                  border border-[#1B2B45]
                                  bg-[#101B30]
                                  hover:bg-[#16233D]
                                  px-8 py-4
                                  text-white
                                  transition-all"
                    >
                        Test Connection
                    </button>

                    <button
                        className="rounded-2xl
                                  border border-red-500/40
                                  bg-red-500/5
                                  hover:bg-red-500/10
                                  px-8 py-4
                                  text-red-400
                                  transition-all"
                    >
                        Remove Key
                    </button>

                </div>
            </div>

          </div>
        </section>
      </div>
    );
}

export default SettingsPage;