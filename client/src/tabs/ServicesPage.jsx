// Dependencies
import {useState} from "react";
import { useNavigate } from "react-router-dom";

// Componenrt
import NavBarSection from '../component/NavBarSection'
import FooterComponentSection from '../component/FooterComponentSection'

function ServicesPage(){

    const navigate = useNavigate();

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

            <section className="min-h-screen py-24 px-6 flex items-center">

                {/* Services Grid */}
                <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">

                {[
                    {
                        icon: "🖼️",
                        title: "Image to PDF Converter",
                        desc: "Convert JPG, PNG, WEBP, and other image formats into high-quality PDF files instantly.",
                        badge: "Available",
                        color: "text-blue-400",
                        button: "Open →",
                        path: "/imagetopdf"
                    },
                    {
                        icon: "📊",
                        title: "LogChart",
                        desc: "A modern SaaS platform for visualizing, monitoring, and analyzing application logs.",
                        badge: "Coming Soon",
                        color: "text-orange-400",
                        button: "Coming Soon",
                        path: null
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
                        {service.badge === "Available" ? "Ready to Use" : "Launching Soon"}
                        </span>

                        <button
                        disabled={service.badge === "Coming Soon"}
                        onClick={() => service.path && navigate(service.path)}
                        className={`rounded-xl border px-4 py-2 text-sm transition ${
                            service.badge === "Coming Soon"
                            ? "cursor-not-allowed border-[#1B2B45] bg-[#0B1220] text-[#64748B]"
                            : "border-[#1B2B45] text-[#E2E8F0] hover:border-[#3B82F6] hover:bg-[#3B82F6]/10"
                        }`}
                        >
                        {service.button}
                        </button>
                    </div>
                    </div>
                ))}

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