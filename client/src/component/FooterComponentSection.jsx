function FooterComponentSection(){
    return(
        <div>
            {/* Footer */}
            <footer className="border-t border-[#1B2B45] bg-[#020817]">
                <div className="max-w-7xl mx-auto px-6 py-16">

                    {/* Top */}
                    <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">

                        {/* Brand */}
                        <div className="lg:col-span-2">
                            <h2 className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text font-bold text-transparent text-2xl">
                                CraftDex
                            </h2>

                            <p className="mt-4 max-w-md leading-7 text-[#94A3B8]">
                                Developer tools, curated resources, and practical guides —
                                indexed so you can build better software, faster.
                            </p>

                            <div className="mt-6 flex gap-3">
                            {[
                                {
                                label: "X",
                                href: "https://www.linkedin.com/in/sarang-khandate-4174a428b",
                                path: "M18.244 2H21l-6.56 7.5L22 22h-6.828l-5.347-6.99L3.72 22H1l7.02-8.02L2 2h7l4.833 6.32L18.244 2Z",
                                },
                                {
                                label: "YouTube",
                                href: "https://www.youtube.com/@CraftDex-Official",
                                path: "M21.58 7.19a2.5 2.5 0 0 0-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.82.42A2.5 2.5 0 0 0 2.42 7.2 26.7 26.7 0 0 0 2 12a26.7 26.7 0 0 0 .42 4.81 2.5 2.5 0 0 0 1.76 1.77C5.75 19 12 19 12 19s6.25 0 7.82-.42a2.5 2.5 0 0 0 1.76-1.77A26.7 26.7 0 0 0 22 12a26.7 26.7 0 0 0-.42-4.81ZM10 15.5v-7l6 3.5-6 3.5Z",
                                },
                            ].map((social) => (
                                <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#1B2B45] text-[#94A3B8] transition hover:border-[#3B82F6] hover:text-white"
                                >
                                <svg
                                    viewBox="0 0 24 24"
                                    className="h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d={social.path} />
                                </svg>
                                </a>
                            ))}
                            </div>
                        </div>

                        {/* Resources */}
                        <div>
                            <h3 className="font-mono text-xs tracking-widest text-[#38BDF8]">
                                // RESOURCES
                            </h3>

                            <ul className="mt-5 space-y-3 text-[#94A3B8]">
                                <li><a href="/resources" className="transition hover:text-white">Documentation</a></li>
                                <li><a href="/services" className="transition hover:text-white">Projects</a></li>
                            </ul>
                        </div>

                        {/* Tools */}
                        <div>
                            <h3 className="font-mono text-xs tracking-widest text-[#38BDF8]">
                                // TOOLS
                            </h3>

                            <ul className="mt-5 space-y-3 text-[#94A3B8]">
                                <li><a href="/imagetopdf" className="transition hover:text-white">Image To PDF</a></li>
                                <li><a href="#" className="transition hover:text-white">DexOne</a></li>
                            </ul>
                        </div>

                        {/* Company */}
                        <div>
                            <h3 className="font-mono text-xs tracking-widest text-[#38BDF8]">
                                // COMPANY
                            </h3>

                            <ul className="mt-5 space-y-3 text-[#94A3B8]">
                                <li><a href="/about" className="transition hover:text-white">About</a></li>
                                <li><a href="/about" className="transition hover:text-white">Contact</a></li>
                            </ul>
                        </div>

                    </div>

                    {/* Divider */}
                    <div className="my-10 border-t border-[#1B2B45]" />

                    {/* Bottom */}
                    <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row">
                        <p className="font-mono text-xs text-[#64748B]">
                            © 2026 CraftDex. All rights reserved.
                        </p>

                        <div className="flex gap-6 text-sm text-[#94A3B8]">
                            <a href="#" className="transition hover:text-white">
                                Privacy Policy
                            </a>
                            <a href="#" className="transition hover:text-white">
                                Terms of Service
                            </a>
                            <a href="#" className="transition hover:text-white">
                                Cookie Policy
                            </a>
                        </div>
                    </div>

                </div>
            </footer>
        </div>
    )
}

export default FooterComponentSection;