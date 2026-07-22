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
                            <h2 className="text-2xl font-bold text-white">
                                Craft<span className="text-[#3B82F6]">Dex</span>
                            </h2>

                            <p className="mt-4 max-w-md leading-7 text-[#94A3B8]">
                                Developer tools, curated resources, and practical guides —
                                indexed so you can build better software, faster.
                            </p>

                            <div className="mt-6 flex gap-3">
                                {[
                                    {
                                        label: "Website",
                                        path: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 0c2.5 2.5 4 5.9 4 10s-1.5 7.5-4 10m0-20c-2.5 2.5-4 5.9-4 10s1.5 7.5 4 10M2.5 9h19M2.5 15h19",
                                    },
                                    {
                                        label: "X (Twitter)",
                                        path: "M4 4l16 16M20 4L4 20",
                                    },
                                    {
                                        label: "LinkedIn",
                                        path: "M4 4h4v16H4V4Zm6 0h4v2.2c.8-1.4 2.4-2.5 4.5-2.5 3.6 0 5.5 2.4 5.5 6.4V20h-4v-8.6c0-2.1-.8-3.4-2.7-3.4-1.5 0-2.4 1-2.8 2-.1.3-.2.8-.2 1.3V20h-4V4Z",
                                    },
                                    {
                                        label: "Email",
                                        path: "M3 5h18v14H3V5Zm0 0 9 8 9-8",
                                    },
                                ].map((social) => (
                                    <a
                                        key={social.label}
                                        href="#"
                                        aria-label={social.label}
                                        className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#1B2B45] text-[#94A3B8] transition hover:border-[#3B82F6] hover:text-white"
                                    >
                                        <svg
                                            viewBox="0 0 24 24"
                                            className="h-4 w-4"
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
                                <li><a href="#" className="transition hover:text-white">Documentation</a></li>
                                <li><a href="#" className="transition hover:text-white">Tutorials</a></li>
                                <li><a href="#" className="transition hover:text-white">Blog</a></li>
                                <li><a href="#" className="transition hover:text-white">Projects</a></li>
                            </ul>
                        </div>

                        {/* Tools */}
                        <div>
                            <h3 className="font-mono text-xs tracking-widest text-[#38BDF8]">
                                // TOOLS
                            </h3>

                            <ul className="mt-5 space-y-3 text-[#94A3B8]">
                                <li><a href="#" className="transition hover:text-white">Code Generator</a></li>
                                <li><a href="#" className="transition hover:text-white">API Explorer</a></li>
                                <li><a href="#" className="transition hover:text-white">Dev Utilities</a></li>
                                <li><a href="#" className="transition hover:text-white">Templates</a></li>
                            </ul>
                        </div>

                        {/* Company */}
                        <div>
                            <h3 className="font-mono text-xs tracking-widest text-[#38BDF8]">
                                // COMPANY
                            </h3>

                            <ul className="mt-5 space-y-3 text-[#94A3B8]">
                                <li><a href="#" className="transition hover:text-white">About</a></li>
                                <li><a href="#" className="transition hover:text-white">Contact</a></li>
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