// Dependencies
import {useState} from "react";

// Componenrt
import NavBarSection from '../component/NavBarSection'
import FooterComponentSection from '../component/FooterComponentSection'

function AboutPage(){

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
            <NavBarSection onShowChange={setValue} className='z-50' />

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
            <div className='pt-20 md:pt-0'>

                {/* Founder Profile Section */}
                <section className="min-h-screen flex items-center justify-center md:py-20 px-4 md:px-6">
                    <div className="max-w-5xl w-full">
                        
                        {/* Glow Container */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/10 via-transparent to-[#60A5FA]/5 rounded-[2.75rem] blur-3xl" />

                            {/* Main Card */}
                            <div className="relative rounded-3xl border border-[#1B2B45] bg-[#050B18] p-8 md:p-14 lg:p-16 overflow-hidden">

                                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                                {/* Left - Profile Info */}
                                <div>
                                    <span className="inline-flex rounded-full border border-[#3B82F6]/30 bg-[#3B82F6]/10 px-5 py-1.5 text-sm font-medium text-[#60A5FA]">
                                    Founder &amp; CEO
                                    </span>

                                    <h2 className="mt-8 text-5xl md:text-6xl font-semibold text-white">
                                    Sarang Khandate
                                    </h2>
                                    
                                    <p className="mt-3 text-xl text-[#3B82F6] font-light">
                                    Full Stack Developer &amp; Automation Engineer
                                    </p>

                                    <div className="mt-10 text-[#94A3B8] leading-relaxed text-[17px]">
                                        Passionate about building reliable AI-powered automation services that
                                        simplify workflows, eliminate repetitive tasks, and help developers and
                                        businesses move faster with confidence.
                                    </div>

                                    {/* Tech Stack */}
                                    <div className="mt-12">
                                        <h4 className="font-semibold text-white mb-6 flex items-center gap-2">
                                            <span>Current Toolkit</span>
                                            <div className="h-px flex-1 bg-gradient-to-r from-[#3B82F6]/30 to-transparent" />
                                        </h4>

                                        <div className="flex flex-wrap gap-3">
                                        {[
                                            "MERN Stack",
                                            "Next.js",
                                            "Python",
                                            "Supabase",
                                            "Docker",
                                            "REST APIs",
                                            "AI Automation",
                                            "Automation Scripts",
                                            "GitHub Actions",
                                            "AWS",
                                        ].map((skill) => (
                                            <span
                                            key={skill}
                                            className="rounded-2xl border border-[#1B2B45] bg-[#0A1428] px-5 py-2.5 text-sm text-[#CBD5E1] hover:border-[#60A5FA] hover:text-white transition-all duration-200 hover:-translate-y-0.5"
                                            >
                                            {skill}
                                            </span>
                                        ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Right Side */}
                                <div className="flex flex-col gap-8">

                                    {/* Philosophy Card */}
                                    <div className="rounded-3xl border border-[#1B2B45] bg-[#0A1428] p-9">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="w-8 h-px bg-[#3B82F6]" />
                                            <span className="uppercase text-xs tracking-[2px] text-[#60A5FA] font-medium">
                                                Our Philosophy
                                            </span>
                                        </div>

                                        <blockquote className="text-[#CBD5E1] italic text-[17px] leading-relaxed">
                                            "We believe great technology is built on trust, reliability, and exceptional user experiences. Every tool and AI-powered service should simplify work, solve real problems, and help people achieve more with confidence."
                                        </blockquote>
                                    </div>

                                    {/* Core Values / Focus Areas */}
                                    <div>
                                    <h4 className="font-semibold text-white mb-6">What I Obsess Over</h4>
                                    <div className="grid grid-cols-2 gap-4">
                                        {[
                                        { icon: "⚙️", label: "Automation" },
                                        { icon: "🚀", label: "Performance" },
                                        { icon: "🏗️", label: "System Design" },
                                        { icon: "🛡️", label: "Reliability" },
                                        ].map(({ icon, label }) => (
                                        <div
                                            key={label}
                                            className="group rounded-3xl border border-[#1B2B45] bg-[#0A1428] p-7 transition-all duration-300 hover:border-[#60A5FA] hover:-translate-y-1"
                                        >
                                            <div className="text-3xl mb-4 transition-transform group-hover:scale-110">
                                            {icon}
                                            </div>
                                            <p className="font-medium text-white">{label}</p>
                                        </div>
                                        ))}
                                    </div>
                                    </div>

                                </div>

                                </div>

                                {/* Optional subtle signature / tagline */}
                                <div className="mt-16 pt-8 border-t border-[#1B2B45] flex justify-center">
                                <p className="text-xs uppercase tracking-widest text-[#475569] font-mono">
                                    Building in public • Shipping with purpose
                                </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                {/* Company Introduction Section */}
                <section className="min-h-screen flex items-center py-24 px-4 md:px-6">
                <div className="max-w-5xl mx-auto text-center">

                    {/* Badge */}
                    <span className="inline-flex items-center rounded-full border border-[#1B2B45] bg-[#050B18] px-5 py-1.5 text-sm font-medium tracking-widest text-[#60A5FA]">
                    ABOUT CRAFTDEX
                    </span>

                    {/* Main Heading */}
                    <h1 className="mt-10 text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] tracking-tighter text-[#F8FAFC]">
                    Empowering Developers
                    <span className="block text-[#3B82F6] mt-2">
                        Through Knowledge &amp; Innovation
                    </span>
                    </h1>

                    {/* Description */}
                    <p className="mx-auto mt-10 max-w-3xl text-lg md:text-xl text-[#94A3B8] leading-relaxed">
                    At CraftDex, we believe every developer deserves access to high-quality learning resources, 
                    modern tools, and practical guidance. Our mission is to simplify the journey by curating 
                    the best technologies, tutorials, and real-world solutions in one seamless platform.
                    </p>

                    {/* Highlights Grid */}
                    <div className="mt-20 grid md:grid-cols-3 gap-6 md:gap-8">

                    {[
                        {
                        title: "Our Mission",
                        desc: "Build a trusted platform where developers can discover quality resources, sharpen their skills, and grow together."
                        },
                        {
                        title: "Our Vision",
                        desc: "Create a global developer ecosystem that encourages continuous learning, collaboration, and bold innovation."
                        },
                        {
                        title: "Our Values",
                        desc: "Quality, accessibility, transparency, and community-first thinking are at the heart of everything we build."
                        }
                    ].map((item, index) => (
                        <div
                        key={index}
                        className="group relative rounded-3xl border border-[#1B2B45] bg-[#050B18] p-8 md:p-10 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#3B82F6]/60"
                        >
                        {/* Subtle accent line */}
                        <div className="h-0.5 w-12 bg-gradient-to-r from-[#3B82F6] to-transparent mb-8 transition-all group-hover:w-16" />

                        <h3 className="text-2xl font-semibold text-white tracking-tight">
                            {item.title}
                        </h3>

                        <p className="mt-5 text-[#94A3B8] leading-relaxed">
                            {item.desc}
                        </p>
                        </div>
                    ))}

                    </div>

                    {/* Optional Trust Bar */}
                    <div className="mt-20 flex justify-center">
                    <div className="flex items-center gap-8 text-sm text-[#64748B]">
                        <div>❤️ Loved by developers</div>
                        <div className="w-px h-3 bg-[#1B2B45]" />
                        <div>Built with passion in India</div>
                    </div>
                    </div>

                </div>
                </section>

                {/* Mission Section */}
                <section className="min-h-screen py-24 px-4 md:px-6">
                <div className="max-w-5xl mx-auto">

                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto">
                    <span className="inline-flex rounded-full border border-[#1B2B45] bg-[#050B18] px-5 py-1.5 text-sm font-medium tracking-widest text-[#60A5FA]">
                        OUR MISSION
                    </span>

                    <h2 className="mt-8 text-5xl md:text-6xl font-semibold tracking-tighter leading-tight text-[#F8FAFC]">
                        The Journey We’re
                        <span className="block text-[#3B82F6]">Building Towards</span>
                    </h2>

                    <p className="mt-8 text-[#94A3B8] text-lg md:text-xl leading-relaxed">
                        Every great platform starts with a single idea. CraftDex is on a mission to become the 
                        ultimate ecosystem where developers don’t just learn — they build, collaborate, and innovate together.
                    </p>
                    </div>

                    {/* Timeline */}
                    <div className="relative mt-20 md:mt-28">

                    {/* Vertical Line */}
                    <div className="absolute left-1/2 top-6 bottom-6 w-px bg-gradient-to-b from-transparent via-[#1B2B45] to-transparent hidden md:block" />

                    {[
                        {
                        icon: "🌱",
                        title: "Today",
                        text: "Curating the highest quality resources and tools for developers."
                        },
                        {
                        icon: "📚",
                        title: "Learning Hub",
                        text: "Interactive tutorials, structured roadmaps, and real-world project guides."
                        },
                        {
                        icon: "🤝",
                        title: "Community",
                        text: "Connecting developers across the globe to learn and grow together."
                        },
                        {
                        icon: "🤖",
                        title: "AI Assistant",
                        text: "Personalized learning paths and intelligent code assistance."
                        },
                        {
                        icon: "🚀",
                        title: "The Future",
                        text: "A complete developer ecosystem — powerful, intuitive, and built for speed."
                        }
                    ].map((item, index) => (
                        <div
                        key={item.title}
                        className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-16 md:mb-20 last:mb-0 ${
                            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                        }`}
                        >
                        {/* Content Card */}
                        <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"}`}>
                            <div className="rounded-3xl border border-[#1B2B45] bg-[#050B18] p-8 md:p-10 transition-all duration-300 hover:border-[#3B82F6]/60 group">
                            
                            <div className="text-5xl mb-6 transition-transform group-hover:scale-110">
                                {item.icon}
                            </div>

                            <h3 className="text-3xl font-semibold text-white tracking-tight">
                                {item.title}
                            </h3>

                            <p className="mt-4 text-[#94A3B8] leading-relaxed">
                                {item.text}
                            </p>
                            </div>
                        </div>

                        {/* Timeline Dot */}
                        <div className="absolute left-1/2 top-10 -translate-x-1/2 hidden md:block">
                            <div className="h-6 w-6 rounded-full border-[5px] border-[#3B82F6] bg-[#050B18] shadow-lg shadow-[#3B82F6]/20" />
                        </div>

                        {/* Connector Dot for Mobile */}
                        <div className="md:hidden w-5 h-5 rounded-full border-4 border-[#3B82F6] bg-[#050B18] mx-auto" />
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

export default AboutPage;