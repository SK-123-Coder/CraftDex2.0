// Dependencies
import {useState} from "react";
import { useNavigate } from "react-router-dom";

// Componenrt
import NavBarSection from '../component/NavBarSection'
import FooterComponentSection from '../component/FooterComponentSection'

function ServicesPage(){

    const navigate = useNavigate();

    // ===================================================================================================================

    // Handling behaviour for blured top & bottom bar effect
    const [show, setShow] = useState(true);

    const setValue = (state) => {
        setShow(state);
    };

    // ===================================================================================================================

    return(
        <div>

            {/* Top Section */}
            <NavBarSection onShowChange={setValue} className='z-50'onShowChange={setValue} className='z-50' />

            {/* top dark border */}
            <div
            className={`
                fixed top-0 left-0 right-0
                h-40 md:h-15
                bg-gradient-to-b from-[#0B1220] via-[#0B1220]/40
                transition-all duration-500 ease-in-out
                ${
                show
                    ? "opacity-0 -translate-y-4 pointer-events-none"
                    : "opacity-100 translate-y-0"
                }
            `}
            />

            {/* ================= Services ================= */}
            <section className="relative overflow-hidden py-28 px-6">

                {/* Background Glow */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[140px]" />
                    <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
                </div>

                <div className="mx-auto max-w-6xl">

                    {/* Heading */}
                    <div className="mx-auto mb-20 max-w-2xl text-center hidden md:block">

                        <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1 text-sm text-blue-400">
                            Our Services
                        </span>

                        <h2 className="mt-6 text-5xl font-bold tracking-tight text-white">
                            Powerful tools built for
                            <span className="text-blue-400"> creators & developers</span>
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-slate-400">
                            Explore products designed with performance, simplicity,
                            and modern workflows in mind.
                        </p>

                    </div>

                    {/* Cards */}
                    <div className="grid gap-8 md:grid-cols-2">

                        {[
                            {
                                icon: "🖼️",
                                title: "Image to PDF Converter",
                                desc: "Convert JPG, PNG, WEBP and more into high-quality PDF documents in seconds. Fast, secure and completely browser-based.",
                                badge: "Available",
                                color: "text-emerald-400",
                                button: "Launch App",
                                path: "/imagetopdf",
                            },
                            {
                                icon: "🚀",
                                title: "DexOne",
                                desc: "An AI-native software development platform that unifies planning, coding, testing, documentation, deployment, and automation into one intelligent workspace for developers and teams.",
                                badge: "Coming Soon",
                                color: "text-orange-400",
                                button: "Coming Soon",
                                path: null,
                            },
                        ].map((service) => (
                            <div
                                key={service.title}
                                className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/70 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-[0_20px_60px_rgba(59,130,246,0.15)]"
                            >
                                {/* Hover Glow */}
                                <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-blue-500/10 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

                                {/* Badge */}
                                <span
                                    className={`inline-flex rounded-full border px-3 py-1 text-xs font-medium ${
                                        service.badge === "Available"
                                            ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-400"
                                            : "border-orange-500/20 bg-orange-500/10 text-orange-400"
                                    }`}
                                >
                                    {service.badge}
                                </span>

                                {/* Icon */}
                                <div className="mt-8 text-6xl transition-transform duration-300 group-hover:scale-110">
                                    {service.icon}
                                </div>

                                {/* Title */}
                                <h3 className="mt-8 text-3xl font-semibold text-white">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="mt-5 leading-8 text-slate-400">
                                    {service.desc}
                                </p>

                                {/* Divider */}
                                <div className="my-8 border-t border-slate-800" />

                                {/* Footer */}
                                <div className="flex items-center justify-between">

                                    <div>
                                        <p className={`text-sm font-medium ${service.color}`}>
                                            {service.badge === "Available"
                                                ? "Ready to Use"
                                                : "Launching Soon"}
                                        </p>

                                        <p className="mt-1 text-xs text-slate-500">
                                            {service.badge === "Available"
                                                ? "Instant access"
                                                : "Stay tuned"}
                                        </p>
                                    </div>

                                    <button
                                        disabled={service.badge === "Coming Soon"}
                                        onClick={() =>
                                            service.path && navigate(service.path)
                                        }
                                        className={`rounded-xl px-5 py-3 font-medium transition-all duration-300 ${
                                            service.badge === "Coming Soon"
                                                ? "cursor-not-allowed bg-slate-900 text-slate-500"
                                                : "bg-blue-500 text-white hover:scale-105 hover:bg-blue-600 active:scale-95"
                                        }`}
                                    >
                                        {service.button}
                                    </button>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>


            {/* Footer section */}
            <FooterComponentSection />

            {/* Bottom dark border */}
            <div
            className={`
                fixed bottom-0 left-0 right-0
                h-40 md:h-15
                bg-gradient-to-t from-[#0B1220] via-[#0B1220]/40
                transition-all duration-500 ease-in-out
                ${
                show
                    ? "opacity-0 -translate-y-4 pointer-events-none"
                    : "opacity-100 translate-y-0"
                }
            `}
            />
            
        </div>
    )
}

export default ServicesPage;