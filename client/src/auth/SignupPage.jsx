// Supabase config
import supabase from '../supabaseConfig'

// Dependencies
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Component
import NotificationModal from '../component/NotificationModal'

function SignupPage(){

  const navigate = useNavigate();

  const [modal, setModal] = useState({
      open: false,
      type: "info",
      title: "",
      message: "",
  });


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
      e.preventDefault();

      setLoading(true);

      try {
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
              setModal({
                  open: true,
                  type: "error",
                  title: "Sign Up Failed",
                  message: error.message,
              });
              return;
          }

          // If email confirmation is enabled
          if (data.user && !data.session) {
              setModal({
                  open: true,
                  type: "success",
                  title: "Verify Your Email",
                  message:
                      "Your account has been created successfully. Please check your email and click the verification link before signing in.",
              });

              return;
          }

          // If email confirmation is disabled
          setModal({
              open: true,
              type: "success",
              title: "Account Created",
              message: "Welcome to CraftDex! Redirecting...",
          });

          setTimeout(() => {
              navigate("/");
          }, 2000);
      } catch (err) {
          setModal({
              open: true,
              type: "error",
              title: "Unexpected Error",
              message: "Something went wrong. Please try again.",
          });

          console.error(err);
      } finally {
          setLoading(false);
      }
  };

    return(
        <div>

          {/* Sign Up Section */}
          <section className="min-h-screen flex items-start md:items-center justify-center px-4 sm:px-6 lg:px-8 py-10">
            <div className="w-full max-w-md lg:max-w-lg rounded-3xl border border-slate-800 bg-[#050B18]/90 backdrop-blur-xl shadow-2xl p-7 sm:p-8">

              {/* Badge */}
              <div className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                  Join CraftDex
                </span>
              </div>

              {/* Heading */}
              <div className="mt-6">
                <h1 className="text-4xl font-bold tracking-tight text-white">
                  Create Account
                </h1>

                <p className="mt-3 leading-relaxed text-slate-400">
                  Join CraftDex to discover curated developer resources, bookmark your
                  favorites, and become part of a growing developer community.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">

                {/* Full Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20"
                  />
                </div>

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
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@example.com"
                    className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20"
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

                    <span className="text-xs text-slate-500">
                      Minimum 8 characters
                    </span>
                  </div>

                  <input
                    id="password"
                    type="password"
                    required
                    autoComplete="new-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20"
                  />

                </div>

                {/* Terms */}
                <label className="flex items-start gap-3 text-sm text-slate-400 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 h-4 w-4 rounded border-slate-700 bg-slate-900 text-blue-500 focus:ring-blue-500"
                  />

                  <span>
                    I agree to the{" "}
                    <a
                      href="/terms"
                      className="text-blue-400 hover:text-blue-300"
                    >
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a
                      href="/privacy"
                      className="text-blue-400 hover:text-blue-300"
                    >
                      Privacy Policy
                    </a>.
                  </span>
                </label>

                {/* Submit Button */}
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

                      Creating Account...
                    </>
                  ) : (
                    "Create Account"
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

              {/* Google Button */}
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
                Already have an account?{" "}
                <a
                  href="/login"
                  className="font-medium text-blue-400 transition hover:text-blue-300"
                >
                  Sign In
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

export default SignupPage