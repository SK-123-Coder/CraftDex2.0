// Dependencies
import {useState} from "react";

// Componenrt
import NavBarSection from '../component/NavBarSection'
import FooterComponentSection from '../component/FooterComponentSection'

function LandingPage(){

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
            <NavBarSection  onShowChange={setValue} className='z-50'/>

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

                {/* Hero Section */}
                <section className="min-h-screen flex items-center justify-center px-6">
                    <div className="max-w-4xl text-center">

                        {/* Badge */}
                        <span className="inline-flex items-center rounded-full border border-[#1B2B45] bg-[#050B18] px-4 py-1 text-sm font-medium text-[#60A5FA]">
                            CRAFTDEX PRESENT
                        </span>

                        {/* Heading */}
                        <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-[#F8FAFC]">
                            Discover, Learn &
                            <span className="block text-[#3B82F6]">
                                Build Amazing Projects
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="mx-auto mt-8 max-w-2xl text-lg md:text-xl leading-8 text-[#94A3B8]">
                            CraftDex is your all-in-one platform for discovering development
                            resources, exploring modern technologies, and accelerating your
                            programming journey with curated tools and guides.
                        </p>

                        {/* Buttons */}
                        <div className="mt-10 flex flex-wrap justify-center gap-4">
                        <button className="rounded-lg bg-[#3B82F6] px-6 py-3 font-medium text-white hover:bg-[#2563EB] transition-colors">
                            Get Started
                        </button>

                        <button className="rounded-lg border border-[#1B2B45] px-6 py-3 font-medium text-[#CBD5E1] hover:bg-[#101B30] transition-colors">
                            Explore Resources
                        </button>
                        </div>

                        {/* Stats */}
                        <div className="mt-16 flex justify-center gap-12 md:gap-20 flex-wrap">
                            <div>
                                <h3 className="text-3xl font-bold text-[#F8FAFC]">10K+</h3>
                                <p className="mt-1 text-[#94A3B8]">Developers</p>
                            </div>

                            <div>
                                <h3 className="text-3xl font-bold text-[#F8FAFC]">500+</h3>
                                <p className="mt-1 text-[#94A3B8]">Resources</p>
                            </div>

                            <div>
                                <h3 className="text-3xl font-bold text-[#F8FAFC]">100+</h3>
                                <p className="mt-1 text-[#94A3B8]">Projects</p>
                            </div>
                        </div>

                    </div>
                </section>

                {/* Features Section */}
                <section className="py-24 px-6">
                    <div className="max-w-7xl mx-auto">

                        {/* Section Header */}
                        <div className="max-w-3xl mx-auto text-center">
                        <span className="inline-flex items-center rounded-full border border-[#1B2B45] bg-[#050B18] px-4 py-1 text-sm font-medium text-[#60A5FA]">
                            WHY CHOOSE CRAFTDEX
                        </span>

                        <h2 className="mt-6 text-4xl md:text-5xl font-bold text-[#F8FAFC]">
                            Everything You Need to
                            <span className="block text-[#3B82F6]">
                            Become a Better Developer
                            </span>
                        </h2>

                        <p className="mt-6 text-lg text-[#94A3B8]">
                            Discover curated learning resources, modern development tools,
                            and real-world projects designed to help you level up your
                            programming skills.
                        </p>
                        </div>

                        {/* Features Grid */}
                        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                        {/* Card 1 */}
                        <div className="rounded-2xl border border-[#1B2B45] bg-[#050B18] p-8 hover:border-[#3B82F6] transition-all duration-300">
                            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#0F172A] text-3xl">
                            📚
                            </div>

                            <h3 className="mt-6 text-2xl font-semibold text-white">
                            Curated Resources
                            </h3>

                            <p className="mt-4 text-[#94A3B8] leading-7">
                            Explore hand-picked tutorials, documentation, articles, and
                            learning paths from trusted developer communities.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="rounded-2xl border border-[#1B2B45] bg-[#050B18] p-8 hover:border-[#3B82F6] transition-all duration-300">
                            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#0F172A] text-3xl">
                            🚀
                            </div>

                            <h3 className="mt-6 text-2xl font-semibold text-white">
                            Build Projects
                            </h3>

                            <p className="mt-4 text-[#94A3B8] leading-7">
                            Practice by creating real-world applications that strengthen
                            your portfolio and improve problem-solving skills.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="rounded-2xl border border-[#1B2B45] bg-[#050B18] p-8 hover:border-[#3B82F6] transition-all duration-300">
                            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#0F172A] text-3xl">
                            💡
                            </div>

                            <h3 className="mt-6 text-2xl font-semibold text-white">
                            Latest Technologies
                            </h3>

                            <p className="mt-4 text-[#94A3B8] leading-7">
                            Stay updated with modern frameworks, tools, and best practices
                            used by professional developers.
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className="rounded-2xl border border-[#1B2B45] bg-[#050B18] p-8 hover:border-[#3B82F6] transition-all duration-300">
                            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#0F172A] text-3xl">
                            ⚡
                            </div>

                            <h3 className="mt-6 text-2xl font-semibold text-white">
                            Developer Tools
                            </h3>

                            <p className="mt-4 text-[#94A3B8] leading-7">
                            Access useful utilities, productivity tools, APIs, and
                            resources that simplify development workflows.
                            </p>
                        </div>

                        {/* Card 5 */}
                        <div className="rounded-2xl border border-[#1B2B45] bg-[#050B18] p-8 hover:border-[#3B82F6] transition-all duration-300">
                            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#0F172A] text-3xl">
                            🎯
                            </div>

                            <h3 className="mt-6 text-2xl font-semibold text-white">
                            Learning Paths
                            </h3>

                            <p className="mt-4 text-[#94A3B8] leading-7">
                            Follow structured roadmaps to master frontend, backend,
                            full-stack, AI, cloud, and DevOps technologies.
                            </p>
                        </div>

                        {/* Card 6 */}
                        <div className="rounded-2xl border border-[#1B2B45] bg-[#050B18] p-8 hover:border-[#3B82F6] transition-all duration-300">
                            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#0F172A] text-3xl">
                            🌍
                            </div>

                            <h3 className="mt-6 text-2xl font-semibold text-white">
                            Community Driven
                            </h3>

                            <p className="mt-4 text-[#94A3B8] leading-7">
                            Learn with a growing community of developers by sharing
                            knowledge, projects, and valuable insights.
                            </p>
                        </div>

                        </div>
                    </div>
                </section>

                {/* What Can You Do */}
                <section className="py-24 px-6">
                    <div className="max-w-7xl mx-auto">

                        {/* Heading */}
                        <div className="text-center max-w-3xl mx-auto">
                        <span className="inline-flex items-center rounded-full border border-[#1B2B45] bg-[#050B18] px-4 py-1 text-sm font-medium text-[#60A5FA]">
                            WHAT CAN YOU DO?
                        </span>

                        <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white">
                            Learn Faster.
                            <span className="block text-[#3B82F6]">
                            Build Smarter.
                            </span>
                        </h2>

                        <p className="mt-6 text-lg text-[#94A3B8]">
                            Everything you need to become a better developer in one platform.
                        </p>
                        </div>

                        {/* Timeline */}
                        <div className="relative mt-20">

                        {/* Center Line */}
                        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-[#1B2B45] md:block"></div>

                        {/* Item */}
                        {[
                            {
                            icon: "🔍",
                            title: "Discover Resources",
                            desc: "Find tutorials, documentation, tools, and articles.",
                            },
                            {
                            icon: "💻",
                            title: "Build Projects",
                            desc: "Create real-world applications to improve your skills.",
                            },
                            {
                            icon: "📖",
                            title: "Learn Technologies",
                            desc: "Explore React, Node, AI, Cloud, DevOps, and more.",
                            },
                            {
                            icon: "🛠️",
                            title: "Developer Tools",
                            desc: "Use useful APIs, utilities, and productivity tools.",
                            },
                            {
                            icon: "🗺️",
                            title: "Follow Roadmaps",
                            desc: "Master Frontend, Backend, AI, and Full Stack step by step.",
                            },
                            {
                            icon: "🚀",
                            title: "Grow Your Career",
                            desc: "Build a portfolio and stay updated with industry trends.",
                            },
                        ].map((item, index) => (
                            <div
                            key={index}
                            className={`relative mb-12 flex flex-col items-center md:flex-row ${
                                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                            }`}
                            >
                            {/* Card */}
                            <div className="w-full md:w-5/12">
                                <div className="rounded-2xl border border-[#1B2B45] bg-[#050B18] p-8 hover:border-[#3B82F6] transition-all duration-300">
                                <div className="text-4xl">{item.icon}</div>

                                <h3 className="mt-5 text-2xl font-semibold text-white">
                                    {item.title}
                                </h3>

                                <p className="mt-3 leading-7 text-[#94A3B8]">
                                    {item.desc}
                                </p>
                                </div>
                            </div>

                            {/* Circle */}
                            <div className="absolute left-1/2 hidden h-5 w-5 -translate-x-1/2 rounded-full border-4 border-[#050B18] bg-[#3B82F6] md:block"></div>

                            {/* Empty Space */}
                            <div className="hidden md:block md:w-5/12"></div>
                            </div>
                        ))}
                        </div>
                    </div>
                </section>

                {/* Why Use Our Tools & Services */}
                <section className="py-24 px-6">
                    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

                        {/* Left Side */}
                        <div>
                        <span className="inline-flex items-center rounded-full border border-[#1B2B45] bg-[#050B18] px-4 py-1 text-sm font-medium text-[#60A5FA]">
                            WHY USE OUR TOOLS & SERVICES
                        </span>

                        <h2 className="mt-6 text-5xl font-bold leading-tight text-white">
                            Everything You Need
                            <span className="block text-[#3B82F6]">
                            To Build Faster
                            </span>
                        </h2>

                        <p className="mt-6 max-w-lg text-lg leading-8 text-[#94A3B8]">
                            Save hours of development time with carefully selected tools,
                            useful services, and resources that help developers build
                            better software with less effort.
                        </p>

                        <button className="mt-10 rounded-xl bg-[#3B82F6] px-6 py-3 font-medium text-white hover:bg-[#2563EB] transition">
                            Explore Tools
                        </button>
                        </div>

                        {/* Right Side */}
                        <div className="space-y-5">

                        <div className="flex gap-5 rounded-2xl border border-[#1B2B45] bg-[#050B18] p-6 hover:border-[#3B82F6] transition">
                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#0F172A] text-2xl">
                            ⚡
                            </div>

                            <div>
                            <h3 className="text-xl font-semibold text-white">
                                Faster Development
                            </h3>

                            <p className="mt-2 text-[#94A3B8]">
                                Skip repetitive work using ready-made developer tools and
                                automation.
                            </p>
                            </div>
                        </div>

                        <div className="flex gap-5 rounded-2xl border border-[#1B2B45] bg-[#050B18] p-6 hover:border-[#3B82F6] transition">
                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#0F172A] text-2xl">
                            🛠️
                            </div>

                            <div>
                            <h3 className="text-xl font-semibold text-white">
                                Powerful Toolkit
                            </h3>

                            <p className="mt-2 text-[#94A3B8]">
                                Access generators, APIs, utilities, templates, and developer
                                resources from one place.
                            </p>
                            </div>
                        </div>

                        <div className="flex gap-5 rounded-2xl border border-[#1B2B45] bg-[#050B18] p-6 hover:border-[#3B82F6] transition">
                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#0F172A] text-2xl">
                            🔒
                            </div>

                            <div>
                            <h3 className="text-xl font-semibold text-white">
                                Trusted Services
                            </h3>

                            <p className="mt-2 text-[#94A3B8]">
                                Carefully selected services that are reliable, secure, and
                                widely used by developers.
                            </p>
                            </div>
                        </div>

                        <div className="flex gap-5 rounded-2xl border border-[#1B2B45] bg-[#050B18] p-6 hover:border-[#3B82F6] transition">
                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#0F172A] text-2xl">
                            🚀
                            </div>

                            <div>
                            <h3 className="text-xl font-semibold text-white">
                                Grow Your Skills
                            </h3>

                            <p className="mt-2 text-[#94A3B8]">
                                Learn while building through curated resources, examples,
                                and real-world projects.
                            </p>
                            </div>
                        </div>

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

export default LandingPage;