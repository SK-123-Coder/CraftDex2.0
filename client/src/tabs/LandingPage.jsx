// Dependencies
import {useState} from "react";
import { useNavigate } from "react-router-dom";

// Componenrt
import NavBarSection from '../component/NavBarSection'
import FooterComponentSection from '../component/FooterComponentSection'

function LandingPage(){

    // ===================================================================================================================

    // Handling behaviour for blured top & bottom bar effect
    const [show, setShow] = useState(true);

    const setValue = (state) => {
        setShow(state);
    };

    // ===================================================================================================================

    const navigate = useNavigate();

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

                {/* Hero Section for intro */}
                <section className="relative min-h-screen flex items-start md:items-center justify-center px-4 sm:px-6 py-24 overflow-hidden">

                    {/* Ambient grid texture */}
                    <div
                        className="pointer-events-none absolute inset-0 opacity-[0.07]"
                        style={{
                            backgroundImage:
                                "linear-gradient(#1B2B45 1px, transparent 1px), linear-gradient(90deg, #1B2B45 1px, transparent 1px)",
                            backgroundSize: "48px 48px",
                            maskImage: "radial-gradient(ellipse at center, black 0%, transparent 70%)",
                        }}
                    />

                    <div className="relative w-full max-w-4xl text-center">

                        {/* Entry badge — reads like a catalog record, not a generic pill */}
                        <span className="inline-flex items-center gap-2 rounded-full border border-[#1B2B45] bg-[#050B18] px-3 sm:px-4 py-1 font-mono text-[11px] sm:text-xs tracking-wide sm:tracking-widest text-[#60A5FA] whitespace-nowrap">
                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#38BDF8]" />
                            CRAFTDEX — INDEX
                        </span>

                        {/* Heading */}
                        <h1 className="mt-6 sm:mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] sm:leading-[1.05] tracking-tight text-[#F8FAFC] text-balance">
                            Build faster with
                            <span className="block text-[#3B82F6]">
                                the right tools.
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="mx-auto mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg md:text-xl leading-7 sm:leading-8 text-[#94A3B8]">
                            CraftDex helps developers discover, compare, and understand the best tools
                            across AI, frontend, backend, cloud, databases, and DevOps—all from one
                            reliable source.
                        </p>

                        {/* Buttons */}
                        <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-3 sm:gap-4">
                            <button 
                            onClick={() => navigate('/services')}
                            className="w-full sm:w-auto rounded-lg bg-[#3B82F6] px-6 py-3 font-medium text-white transition-colors hover:bg-[#2563EB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#60A5FA]">
                                Get Started
                            </button>

                            <button 
                            onClick={() => navigate('/resources')}
                            className="w-full sm:w-auto rounded-lg border border-[#1B2B45] px-6 py-3 font-medium text-[#CBD5E1] transition-colors hover:bg-[#101B30] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#60A5FA]">
                                Explore Resources
                            </button>
                        </div>

                        {/* Signature: live index strip — the "Dex" made literal */}
                        <div className="mt-10 sm:mt-14 overflow-hidden border-y border-[#1B2B45]/60 py-2 sm:py-3 [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
                            <div className="craftdex-ticker flex w-max gap-6 sm:gap-10 font-mono text-xs sm:text-sm text-[#64748B] motion-reduce:animate-none">
                                {[
                                    ["042", "React Query"],
                                    ["017", "Vite"],
                                    ["089", "Tailwind CSS"],
                                    ["103", "tRPC"],
                                    ["056", "Zod"],
                                    ["071", "Prisma"],
                                    ["024", "Next.js"],
                                    ["118", "Zustand"],
                                ]
                                    .concat([
                                        ["042", "React Query"],
                                        ["017", "Vite"],
                                        ["089", "Tailwind CSS"],
                                        ["103", "tRPC"],
                                        ["056", "Zod"],
                                        ["071", "Prisma"],
                                        ["024", "Next.js"],
                                        ["118", "Zustand"],
                                    ])
                                    .map(([num, name], i) => (
                                        <span key={i} className="flex items-center gap-2 whitespace-nowrap">
                                            <span className="text-[#38BDF8]">#{num}</span>
                                            {name}
                                        </span>
                                    ))}
                            </div>
                        </div>

                    </div>

                    <style>{`
                        .craftdex-ticker {
                            animation: craftdex-scroll 28s linear infinite;
                        }
                        @keyframes craftdex-scroll {
                            from { transform: translateX(0); }
                            to { transform: translateX(-50%); }
                        }
                    `}</style>
                </section>

                {/* Features Section */}
                <section className="min-h-screen py-24 px-6">
                    <div className="max-w-7xl mx-auto">

                        {/* Section Header */}
                        <div className="max-w-3xl mx-auto text-center">
                            <span className="inline-flex items-center gap-2 rounded-full border border-[#1B2B45] bg-[#050B18] px-4 py-1 font-mono text-xs tracking-widest text-[#60A5FA]">
                                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#38BDF8]" />
                                TOOLS & AI SERVICES
                            </span>

                            <h2 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight text-[#F8FAFC]">
                                Everything developers need,
                                <span className="block text-[#3B82F6]">
                                    powered by AI.
                                </span>
                            </h2>

                            <p className="mt-6 text-lg leading-7 text-[#94A3B8]">
                                From AI-powered recommendations and technology comparisons to curated
                                developer tools, learning resources, and project guidance—CraftDex
                                brings everything you need to build smarter in one place.
                            </p>
                        </div>

                        {/* Features Grid */}
                        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-[#1B2B45] bg-[#1B2B45] md:grid-cols-2 lg:grid-cols-3">

                            {[
                                {
                                    num: "01",
                                    title: "AI Agents",
                                    body: "Deploy intelligent AI agents that automate coding, research, documentation, and developer workflows.",
                                },
                                {
                                    num: "02",
                                    title: "Automation Workflows",
                                    body: "Create no-code and low-code workflows that connect your favorite developer tools and services.",
                                },
                                {
                                    num: "03",
                                    title: "Developer Tools",
                                    body: "Discover trusted frameworks, APIs, SDKs, libraries, and cloud services curated for modern development.",
                                },
                                {
                                    num: "04",
                                    title: "Tech Stack Recommendations",
                                    body: "Receive AI-powered technology recommendations tailored to your project's scale, budget, and goals.",
                                },
                                {
                                    num: "05",
                                    title: "Project Intelligence",
                                    body: "Generate project plans, architecture suggestions, implementation guides, and learning resources in seconds.",
                                },
                                {
                                    num: "06",
                                    title: "Integrations",
                                    body: "Connect AI with GitHub, Vercel, Supabase, Firebase, Slack, databases, and hundreds of other services to automate your workflow.",
                                },
                            ].map((card) => (
                                <div
                                    key={card.num}
                                    className="group relative bg-[#050B18] p-8 transition-colors duration-300 hover:bg-[#0A1526]"
                                >
                                    <span className="font-mono text-sm text-[#38BDF8]">
                                        {card.num}
                                    </span>

                                    <h3 className="mt-4 text-2xl font-semibold text-white">
                                        {card.title}
                                    </h3>

                                    <p className="mt-4 leading-7 text-[#94A3B8]">
                                        {card.body}
                                    </p>

                                    <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px scale-x-0 bg-[#3B82F6] transition-transform duration-300 group-hover:scale-x-100" />
                                </div>
                            ))}

                        </div>
                    </div>
                </section>

                {/* What You can Do */}
                <section className="min-h-screen py-24 px-6">
                    <div className="max-w-7xl mx-auto">

                        {/* Heading */}
                        <div className="text-center max-w-3xl mx-auto">
                            <span className="inline-flex items-center gap-2 rounded-full border border-[#1B2B45] bg-[#050B18] px-4 py-1 font-mono text-xs tracking-widest text-[#60A5FA]">
                                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#38BDF8]" />
                                WHAT YOU CAN DO
                            </span>

                            <h2 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight text-white">
                                Discover, automate,
                                <span className="block text-[#3B82F6]">
                                    and build with AI.
                                </span>
                            </h2>

                            <p className="mt-6 text-lg text-[#94A3B8]">
                                Everything you need to find the right tools, automate workflows, and accelerate software development—all in one platform.
                            </p>
                        </div>

                        {/* Timeline */}
                        <div className="relative mt-20">

                            {/* Center Line */}
                            <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-[#1B2B45] md:block"></div>

                            {/* Item */}
                            {[
                                {
                                    title: "Discover Developer Tools",
                                    desc: "Browse curated frameworks, libraries, APIs, cloud platforms, and AI tools for every stage of development.",
                                },
                                {
                                    title: "Compare Technologies",
                                    desc: "Evaluate tools side by side with AI-powered insights, feature comparisons, and practical recommendations.",
                                },
                                {
                                    title: "Build Your Tech Stack",
                                    desc: "Generate complete technology stacks tailored to your project, from frontend and backend to deployment.",
                                },
                                {
                                    title: "Automate Workflows",
                                    desc: "Connect developer tools and AI services to automate repetitive tasks, testing, deployments, and documentation.",
                                },
                                {
                                    title: "Learn with AI",
                                    desc: "Understand new technologies through AI-powered explanations, learning paths, and implementation guides.",
                                },
                                {
                                    title: "Launch with Confidence",
                                    desc: "Turn ideas into production-ready projects using the right tools, best practices, and AI-assisted development.",
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
                                        <div className="rounded-2xl border border-[#1B2B45] bg-[#050B18] p-8 transition-all duration-300 hover:border-[#3B82F6]">
                                            <span className="font-mono text-sm text-[#38BDF8]">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>

                                            <h3 className="mt-4 text-2xl font-semibold text-white">
                                                {item.title}
                                            </h3>

                                            <p className="mt-3 leading-7 text-[#94A3B8]">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Node */}
                                    <div className="absolute left-1/2 hidden h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-4 border-[#050B18] bg-[#3B82F6] font-mono text-[10px] font-bold text-white md:flex">
                                        {String(index + 1).padStart(2, "0")}
                                    </div>

                                    {/* Empty Space */}
                                    <div className="hidden md:block md:w-5/12"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Use Our Tools & Services */}
                <section className="min-h-screen py-24 px-6 flex justify-center items-center">
                    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

                        {/* Left Side */}
                        <div>
                            <span className="inline-flex items-center gap-2 rounded-full border border-[#1B2B45] bg-[#050B18] px-4 py-1 font-mono text-xs tracking-widest text-[#60A5FA]">
                                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#38BDF8]" />
                                WHY CRAFTDEX
                            </span>

                            <h2 className="mt-6 text-5xl font-bold leading-tight tracking-tight text-white">
                                One platform for
                                <span className="block text-[#3B82F6]">
                                    AI tools & developer services.
                                </span>
                            </h2>

                            <p className="mt-6 max-w-lg text-lg leading-8 text-[#94A3B8]">
                                Discover trusted developer tools, automate repetitive workflows, compare
                                technologies, and access AI-powered services—all from a single platform
                                built to help developers ship faster.
                            </p>

                            <button 
                            onClick={() => navigate('/services')}
                            className="mt-10 rounded-xl bg-[#3B82F6] px-6 py-3 font-medium text-white transition hover:bg-[#2563EB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#60A5FA]">
                                Explore Platform
                            </button>
                        </div>

                        {/* Right Side */}
                        <div className="divide-y divide-[#1B2B45] overflow-hidden rounded-2xl border border-[#1B2B45] bg-[#050B18]">

                            {[
                                {
                                    num: "01",
                                    title: "Curated Developer Tools",
                                    desc: "Explore trusted frameworks, APIs, libraries, cloud services, and AI platforms organized for modern development.",
                                },
                                {
                                    num: "02",
                                    title: "AI-Powered Assistance",
                                    desc: "Receive intelligent recommendations, technology comparisons, code explanations, and project guidance instantly.",
                                },
                                {
                                    num: "03",
                                    title: "Workflow Automation",
                                    desc: "Automate development, testing, deployment, documentation, and everyday engineering tasks with AI-driven workflows.",
                                },
                                {
                                    num: "04",
                                    title: "Everything in One Place",
                                    desc: "From discovery and learning to automation and implementation, CraftDex brings the developer ecosystem together.",
                                },
                            ].map((item) => (
                                <div
                                    key={item.num}
                                    className="group flex gap-5 p-6 transition-colors duration-300 hover:bg-[#0A1526]"
                                >
                                    <span className="shrink-0 font-mono text-sm text-[#38BDF8]">
                                        {item.num}
                                    </span>

                                    <div>
                                        <h3 className="text-xl font-semibold text-white">
                                            {item.title}
                                        </h3>

                                        <p className="mt-2 text-[#94A3B8]">
                                            {item.desc}
                                        </p>
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

export default LandingPage;