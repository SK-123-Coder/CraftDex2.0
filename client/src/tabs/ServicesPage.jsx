// Dependencies
import {useState} from "react";

// Componenrt
import NavBarSection from '../component/NavBarSection'
import FooterComponentSection from '../component/FooterComponentSection'

function ServicesPage(){

    // ===================================================================================================================

    // Handling document bar and focuse effect behaviour
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

            {/* Main Section */}
            <div className='pt-10 md:pt-0'>

                {/* Services & Tools */}
                <section className="min-h-screen py-24 px-6">

                <div className="max-w-7xl mx-auto">

                    {/* Heading */}

                    <div className="text-center">

                    <span className="inline-flex rounded-full border border-[#1B2B45] bg-[#050B18] px-4 py-1 text-sm text-[#60A5FA]">
                        SERVICES & TOOLS
                    </span>

                    <h2 className="mt-6 text-5xl font-bold text-[#F8FAFC]">
                        Everything You Need to
                        <span className="block text-[#3B82F6]">
                        Build Better Software
                        </span>
                    </h2>

                    <p className="mt-6 max-w-3xl mx-auto text-[#94A3B8] leading-8">
                        Access developer resources, AI-powered tools, curated roadmaps,
                        and productivity utilities—all in one modern platform.
                    </p>

                    </div>

                    {/* Services Grid */}

                    <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

                    {[
                        {
                        icon: "📚",
                        title: "Learning Hub",
                        desc: "Structured roadmaps, tutorials, notes, and hands-on learning paths.",
                        badge: "Popular",
                        color: "text-blue-400"
                        },
                        {
                        icon: "🧠",
                        title: "AI Assistant",
                        desc: "Get coding help, debugging support, explanations, and project guidance.",
                        badge: "AI",
                        color: "text-violet-400"
                        },
                        {
                        icon: "🛠️",
                        title: "Developer Tools",
                        desc: "Useful utilities like JSON Formatter, Regex Tester, Color Picker and more.",
                        badge: "Tools",
                        color: "text-green-400"
                        },
                        {
                        icon: "🚀",
                        title: "Project Generator",
                        desc: "Kickstart projects with templates, starter kits, and best practices.",
                        badge: "New",
                        color: "text-orange-400"
                        },
                        {
                        icon: "🌐",
                        title: "API Directory",
                        desc: "Discover free APIs, SDKs, authentication services, and cloud resources.",
                        badge: "Resources",
                        color: "text-cyan-400"
                        },
                        {
                        icon: "🤝",
                        title: "Community",
                        desc: "Share projects, collaborate with developers, and join discussions.",
                        badge: "Coming Soon",
                        color: "text-pink-400"
                        }
                    ].map((service) => (

                        <div
                        key={service.title}
                        className="group relative overflow-hidden rounded-3xl border border-[#1B2B45] bg-[#050B18] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#3B82F6]/60 hover:shadow-[0_0_40px_rgba(59,130,246,.18)]"
                        >

                        {/* Glow */}
                        <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#3B82F6]/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

                        {/* Badge */}

                        <span className="inline-flex rounded-full border border-[#1B2B45] bg-[#0B1220] px-3 py-1 text-xs text-[#60A5FA]">
                            {service.badge}
                        </span>

                        {/* Icon */}

                        <div className="mt-6 text-5xl">
                            {service.icon}
                        </div>

                        {/* Title */}

                        <h3 className="mt-6 text-2xl font-semibold text-[#F8FAFC]">
                            {service.title}
                        </h3>

                        {/* Description */}

                        <p className="mt-4 text-[#94A3B8] leading-7">
                            {service.desc}
                        </p>

                        {/* Footer */}

                        <div className="mt-8 flex items-center justify-between">

                            <span className={`text-sm font-medium ${service.color}`}>
                            Available
                            </span>

                            <button className="rounded-xl border border-[#1B2B45] px-4 py-2 text-sm text-[#E2E8F0] transition hover:border-[#3B82F6] hover:bg-[#3B82F6]/10">
                            Open →
                            </button>

                        </div>

                        </div>

                    ))}

                    </div>

                </div>

                </section>
                
            </div>

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