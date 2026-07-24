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

    return (
      <div>

        {/* Nav bar */}
        <NavBarSection />

        {/* Profiel section */}
        <section className="min-h-screen flex items-center justify-center px-4 py-12">
          <div className="w-full max-w-4xl">

            {/* Profile Header */}
            <div className="rounded-3xl border border-[#1B2B45] bg-[#0B1220] p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-10">

                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-[#16233D] to-[#1E2937] border-4 border-[#3B82F6] flex items-center justify-center text-6xl shadow-inner">
                    👤
                  </div>
                </div>

                {/* User Info */}
                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-5xl font-semibold tracking-tighter text-white">
                    Hi, {session?.user?.user_metadata?.name ||
                      session?.user?.user_metadata?.username ||
                      "Developer"}
                  </h1>

                  <div className="inline-flex mt-4 items-center gap-2 rounded-full border border-slate-700 bg-[#101B30] px-5 py-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                    <p className="text-sm text-slate-300 font-medium">
                      {session?.user?.email}
                    </p>
                  </div>

                  <p className="mt-3 text-[#94A3B8]">
                    Welcome back • Member since 2025
                  </p>
                </div>

              </div>
            </div>

            {/* Personal AI Settings */}
            <div className="mt-10 rounded-3xl border border-[#1B2B45] bg-[#0B1220] p-8 md:p-12">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-semibold text-white">Personal AI ( Inactive )</h2>
                  <p className="text-[#94A3B8] mt-1.5">
                    Use your own API keys and models
                  </p>
                </div>
                <div className="px-4 py-1.5 text-xs font-medium rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  Recommended
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">

                {/* Provider */}
                <div>
                  <label className="block text-sm text-slate-400 mb-2 font-medium">AI Provider</label>
                  <select
                    className="w-full rounded-2xl bg-[#101B30] border border-[#1B2B45] px-5 py-4 text-white outline-none focus:border-[#3B82F6] transition-all appearance-none"
                  >
                    <option>OpenAI</option>
                    <option>Google Gemini</option>
                    <option>Anthropic Claude</option>
                    <option>Groq</option>
                    <option>OpenRouter</option>
                    <option>Together AI</option>
                  </select>
                </div>

                {/* Default Model */}
                <div>
                  <label className="block text-sm text-slate-400 mb-2 font-medium">Default Model</label>
                  <input
                    type="text"
                    placeholder="gpt-4o-mini"
                    className="w-full rounded-2xl bg-[#101B30] border border-[#1B2B45] px-5 py-4 text-white outline-none focus:border-[#3B82F6] transition-all"
                  />
                </div>

              </div>

              {/* API Key */}
              <div className="mt-8">
                <label className="block text-sm text-slate-400 mb-2 font-medium">API Key</label>
                <input
                  type="password"
                  placeholder="sk-••••••••••••••••••••••••••••"
                  className="w-full rounded-2xl bg-[#101B30] border border-[#1B2B45] px-5 py-4 text-white outline-none focus:border-[#3B82F6] transition-all"
                />
                <p className="mt-3 text-xs text-[#64748B]">
                  Your key is end-to-end encrypted and never shared. We only use it to make requests on your behalf.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="mt-10 flex flex-wrap gap-4">
                <button className="flex-1 md:flex-none rounded-2xl bg-[#3B82F6] hover:bg-[#2563EB] px-8 py-4 text-white font-semibold transition-all active:scale-[0.985]">
                  Save Configuration
                </button>

                <button className="flex-1 md:flex-none rounded-2xl border border-[#1B2B45] hover:bg-[#16233D] px-8 py-4 text-white transition-all">
                  Test Connection
                </button>

                <button className="flex-1 md:flex-none rounded-2xl border border-red-500/50 hover:bg-red-500/10 text-red-400 px-8 py-4 transition-all">
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