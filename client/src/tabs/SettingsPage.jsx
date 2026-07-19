// Dependencies
import { Link } from "react-router-dom";
import { useContext } from "react";

// Component
import NavBarSection from '../component/NavBarSection'

// Icons
import { FaArrowLeft } from "react-icons/fa";
import { FaUserCircle, FaCog, FaBell, FaLock, FaSignOutAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { AuthContext } from '../component/AuthProvider'

function SettingsPage() {

    const session = useContext(AuthContext);

    return (
      <div>

        {/* Nav bar */}
        <NavBarSection />

        <section className="min-h-screen flex items-center justify-center px-4 py-12 md:mt-0 pt-18">

          <div className="w-full max-w-5xl">

            {/* Header */}
            <div className="rounded-2xl border border-[#1B2B45] bg-[#0B1220] p-8">

              <div className="flex flex-col md:flex-row items-center gap-8">

                {/* Avatar */}
                <div className="flex flex-col items-center">
                  <div className="w-28 h-28 rounded-full bg-[#16233D] border-4 border-[#3B82F6] flex items-center justify-center text-5xl">
                    👤
                  </div>
                </div>

                {/* User Info */}
                <div className="flex flex-col items-center flex-1 text-center gap-2">

                  <h1 className="text-4xl font-extrabold tracking-tight text-white">
                    Hi, {session?.user?.user_metadata?.name ||
                      session?.user?.user_metadata?.username ||
                      "User"}
                  </h1>

                  <div className="mt-3 rounded-full border border-slate-700 bg-slate-800/50 px-4 py-1.5">
                    <p className="text-sm text-slate-300">
                      {session?.user?.email}
                    </p>
                  </div>

                </div>

              </div>
            </div>

            {/* AI Settings */}
            <div className="rounded-xl border border-[#1B2B45] bg-[#0B1220] p-6 md:col-span-2 mt-8">
              <h2 className="text-xl font-semibold text-white">
                Personal AI
              </h2>

              <p className="mt-2 text-slate-400 text-sm">
                Connect your own AI provider to use your personal API quota instead of the
                platform's shared credits.
              </p>

              <div className="mt-6 grid gap-5 md:grid-cols-2">

                {/* Provider */}
                <div>
                  <label className="text-sm text-slate-400">
                    AI Provider
                  </label>

                  <select
                    className="mt-1 w-full rounded-lg bg-[#101B30] border border-[#1B2B45] p-3 text-white outline-none focus:border-blue-500"
                  >
                    <option>OpenAI</option>
                    <option>Google Gemini</option>
                    <option>Anthropic Claude</option>
                    <option>OpenRouter</option>
                    <option>Groq</option>
                    <option>Together AI</option>
                  </select>
                </div>

                {/* Model */}
                <div>
                  <label className="text-sm text-slate-400">
                    Default Model
                  </label>

                  <input
                    type="text"
                    placeholder="gpt-5.5"
                    className="mt-1 w-full rounded-lg bg-[#101B30] border border-[#1B2B45] p-3 text-white outline-none focus:border-blue-500"
                  />
                </div>

              </div>

              {/* API Key */}
              <div className="mt-5">
                <label className="text-sm text-slate-400">
                  API Key
                </label>

                <input
                  type="password"
                  placeholder="sk-********************************"
                  className="mt-1 w-full rounded-lg bg-[#101B30] border border-[#1B2B45] p-3 text-white outline-none focus:border-blue-500"
                />

                <p className="mt-2 text-xs text-slate-500">
                  Your API key is encrypted before storage and is only used to make requests
                  on your behalf.
                </p>
              </div>

              {/* Buttons */}
              <div className="mt-6 flex gap-3 flex-wrap">
                <button className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700 transition">
                  Save API Key
                </button>

                <button className="rounded-lg border border-[#1B2B45] px-5 py-2 text-slate-300 hover:bg-[#16233D] transition">
                  Test Connection
                </button>

                <button className="rounded-lg border border-red-500 px-5 py-2 text-red-400 hover:bg-red-500/10 transition">
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