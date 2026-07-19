// Dependencies
import {useState} from "react";

// Componenrt
import NavBarSection from '../component/NavBarSection'
import FooterComponentSection from '../component/FooterComponentSection'

function AboutPage(){

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
            <div className='pt-10 md:pt-0'>

                {/* Company Introduction Section */}
                <section className="min-h-screen flex flex-col items-center py-24 md:py-32 lg:py-20 px-4 sm:px-6">
                    <div className="max-w-5xl text-center md:pt-28">

                        {/* Badge */}
                        <span className="inline-flex items-center rounded-full border border-[#1B2B45] bg-[#050B18] px-4 py-1 text-sm font-medium text-[#60A5FA]">
                        ABOUT CRAFTDEX
                        </span>

                        {/* Heading */}
                        <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-[#F8FAFC]">
                        Empowering Developers
                        <span className="block text-[#3B82F6]">
                            Through Knowledge & Innovation
                        </span>
                        </h1>

                        {/* Description */}
                        <p className="mx-auto mt-8 max-w-3xl text-lg md:text-xl leading-8 text-[#94A3B8]">
                        At CraftDex, we believe every developer deserves access to high-quality
                        learning resources, modern development tools, and practical project
                        guidance. Our mission is to simplify the learning journey by bringing
                        curated technologies, tutorials, and real-world solutions together in one
                        platform.
                        </p>

                        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#94A3B8]">
                        Whether you're just starting your programming career or you're an
                        experienced engineer exploring new technologies, CraftDex helps you
                        discover, learn, and build with confidence.
                        </p>

                        {/* Buttons */}
                        <div className="mt-10 flex flex-wrap justify-center gap-4">
                        <button className="rounded-lg bg-[#3B82F6] px-6 py-3 font-medium text-white hover:bg-[#2563EB] transition-colors">
                            Learn More
                        </button>

                        <button className="rounded-lg border border-[#1B2B45] px-6 py-3 font-medium text-[#CBD5E1] hover:bg-[#101B30] transition-colors">
                            Contact Us
                        </button>
                        </div>

                        {/* Company Highlights */}
                        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">

                        <div className="rounded-xl border border-[#1B2B45] bg-[#050B18] p-6">
                            <h3 className="text-xl font-semibold text-[#F8FAFC]">
                            Our Mission
                            </h3>
                            <p className="mt-3 text-[#94A3B8] leading-7">
                            Build a trusted platform where developers can discover quality
                            resources, improve their skills, and grow together.
                            </p>
                        </div>

                        <div className="rounded-xl border border-[#1B2B45] bg-[#050B18] p-6">
                            <h3 className="text-xl font-semibold text-[#F8FAFC]">
                            Our Vision
                            </h3>
                            <p className="mt-3 text-[#94A3B8] leading-7">
                            Create a global developer ecosystem that encourages continuous
                            learning, collaboration, and innovation.
                            </p>
                        </div>

                        <div className="rounded-xl border border-[#1B2B45] bg-[#050B18] p-6">
                            <h3 className="text-xl font-semibold text-[#F8FAFC]">
                            Our Values
                            </h3>
                            <p className="mt-3 text-[#94A3B8] leading-7">
                            Quality, accessibility, innovation, and community are at the heart of
                            everything we create.
                            </p>
                        </div>

                        </div>

                    </div>
                </section>

                {/* Founder Profile Section */}
                <section className="min-h-screen flex items-center justify-center px-4 py-20">
                <div className="max-w-5xl w-full">

                    {/* Heading */}
                    <div className="text-center">

                    <span className="inline-flex items-center rounded-full border border-[#1B2B45] bg-[#050B18] px-4 py-1 text-sm font-medium text-[#60A5FA]">
                        MEET THE FOUNDER
                    </span>

                    <h2 className="mt-6 text-4xl md:text-5xl font-bold text-[#F8FAFC]">
                        Behind
                        <span className="block text-[#3B82F6]">
                        CraftDex
                        </span>
                    </h2>

                    <p className="mt-5 max-w-2xl mx-auto text-lg text-[#94A3B8]">
                        Passionate about creating developer-first experiences, open-source
                        projects, and modern web applications.
                    </p>

                    </div>

                    {/* Profile Card */}
                    <div className="relative mt-20">

                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-[#3B82F6]/10 blur-3xl rounded-full"></div>

                    <div className="relative rounded-3xl border border-[#1B2B45] bg-[#050B18] px-8 py-14">

                        {/* Avatar */}
                        <div className="flex justify-center">

                        <div className="relative">

                            <div className="absolute inset-0 rounded-full bg-[#3B82F6]/30 blur-xl"></div>

                            <img
                            // src="https://via.placeholder.com/180"
                            alt="Founder"
                            className="relative w-40 h-40 rounded-full object-cover border-4 border-[#3B82F6]"
                            />

                        </div>

                        </div>

                        {/* Name */}
                        <div className="text-center mt-8">

                        <h3 className="text-3xl md:text-4xl font-bold text-[#F8FAFC]">
                            John Doe
                        </h3>

                        <p className="mt-2 text-lg text-[#3B82F6]">
                            Founder • Full Stack Developer
                        </p>

                        </div>

                        {/* Quote */}
                        <blockquote className="mt-8 max-w-3xl mx-auto text-center text-[#CBD5E1] italic text-lg leading-8">
                        "I believe great software isn't just about writing code—it's about
                        solving real problems and empowering developers to build with
                        confidence."
                        </blockquote>

                        {/* Divider */}
                        <div className="w-24 h-px bg-[#1B2B45] mx-auto my-10"></div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

                        <div className="text-center">
                            <h4 className="text-3xl font-bold text-[#3B82F6]">5+</h4>
                            <p className="mt-2 text-[#94A3B8]">Years</p>
                        </div>

                        <div className="text-center">
                            <h4 className="text-3xl font-bold text-[#3B82F6]">50+</h4>
                            <p className="mt-2 text-[#94A3B8]">Projects</p>
                        </div>

                        <div className="text-center">
                            <h4 className="text-3xl font-bold text-[#3B82F6]">100+</h4>
                            <p className="mt-2 text-[#94A3B8]">Articles</p>
                        </div>

                        <div className="text-center">
                            <h4 className="text-3xl font-bold text-[#3B82F6]">10K+</h4>
                            <p className="mt-2 text-[#94A3B8]">Community</p>
                        </div>

                        </div>

                        {/* Skills */}
                        <div className="mt-12">

                        <h4 className="text-center text-xl font-semibold text-[#F8FAFC]">
                            Tech Stack
                        </h4>

                        <div className="mt-6 flex flex-wrap justify-center gap-3">

                            {[
                            "React",
                            "Next.js",
                            "Node.js",
                            "Express",
                            "MongoDB",
                            "Tailwind CSS",
                            "TypeScript",
                            "Docker",
                            "AWS"
                            ].map((skill) => (
                            <span
                                key={skill}
                                className="rounded-full border border-[#1B2B45] bg-[#0B1425] px-5 py-2 text-sm text-[#CBD5E1] hover:border-[#3B82F6] transition"
                            >
                                {skill}
                            </span>
                            ))}

                        </div>

                        </div>

                        {/* Buttons */}
                        <div className="mt-12 flex flex-wrap justify-center gap-4">

                        <button className="rounded-lg bg-[#3B82F6] px-6 py-3 text-white font-medium hover:bg-[#2563EB] transition">
                            View Portfolio
                        </button>

                        <button className="rounded-lg border border-[#1B2B45] px-6 py-3 text-[#CBD5E1] hover:bg-[#101B30] transition">
                            Download Resume
                        </button>

                        <button className="rounded-lg border border-[#1B2B45] px-6 py-3 text-[#CBD5E1] hover:bg-[#101B30] transition">
                            Contact
                        </button>

                        </div>

                    </div>

                    </div>

                </div>
                </section>

                {/* Mission Section */}
                <section className="min-h-screen py-24 px-6">

                    <div className="max-w-5xl mx-auto">

                        {/* Heading */}
                        <div className="text-center">

                            <span className="inline-flex rounded-full border border-[#1B2B45] bg-[#050B18] px-4 py-1 text-sm text-[#60A5FA]">
                                OUR MISSION
                            </span>

                            <h2 className="mt-6 text-5xl font-bold text-[#F8FAFC]">
                                The Journey We're
                                <span className="block text-[#3B82F6]">
                                    Building Towards
                                </span>
                            </h2>

                            <p className="mt-6 text-[#94A3B8] max-w-3xl mx-auto leading-8">
                                Every great platform starts with a single idea. CraftDex is on a
                                mission to become the ultimate ecosystem where developers don't
                                just learn—they build, collaborate, and innovate together.
                            </p>

                        </div>

                        {/* Timeline */}

                        <div className="relative mt-24">

                            {/* Center Line */}

                            <div className="absolute left-1/2 top-0 h-full w-px bg-[#1B2B45] -translate-x-1/2"></div>

                            {[
                                {
                                    icon: "🌱",
                                    title: "Today",
                                    text: "Curating quality resources for developers."
                                },
                                {
                                    icon: "📚",
                                    title: "Learning Hub",
                                    text: "Interactive tutorials, roadmaps and project guides."
                                },
                                {
                                    icon: "🤝",
                                    title: "Community",
                                    text: "Connect developers across the globe."
                                },
                                {
                                    icon: "🤖",
                                    title: "AI Assistant",
                                    text: "Personalized learning powered by AI."
                                },
                                {
                                    icon: "🚀",
                                    title: "Future",
                                    text: "A complete developer ecosystem."
                                }
                            ].map((item, index) => (

                                <div
                                    key={item.title}
                                    className={`relative mb-20 flex ${
                                        index % 2 === 0 ? "justify-start" : "justify-end"
                                    }`}
                                >

                                    <div className="w-full md:w-5/12">

                                        <div className="rounded-2xl border border-[#1B2B45] bg-[#050B18] p-6">

                                            <div className="text-4xl">
                                                {item.icon}
                                            </div>

                                            <h3 className="mt-4 text-2xl font-bold text-[#F8FAFC]">
                                                {item.title}
                                            </h3>

                                            <p className="mt-3 text-[#94A3B8] leading-7">
                                                {item.text}
                                            </p>

                                        </div>

                                    </div>

                                    {/* Circle */}

                                    <div className="absolute left-1/2 top-8 -translate-x-1/2">

                                        <div className="h-5 w-5 rounded-full border-4 border-[#3B82F6] bg-[#050B18]"></div>

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

export default AboutPage;