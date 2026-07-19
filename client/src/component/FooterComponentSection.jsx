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
                    Discover developer tools, curated resources, modern technologies,
                    and practical guides designed to help developers build better
                    software faster.
                    </p>

                    <div className="mt-6 flex gap-4">
                    <a
                        href="#"
                        className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#1B2B45] text-[#94A3B8] hover:border-[#3B82F6] hover:text-white transition"
                    >
                        🌐
                    </a>

                    <a
                        href="#"
                        className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#1B2B45] text-[#94A3B8] hover:border-[#3B82F6] hover:text-white transition"
                    >
                        🐦
                    </a>

                    <a
                        href="#"
                        className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#1B2B45] text-[#94A3B8] hover:border-[#3B82F6] hover:text-white transition"
                    >
                        💼
                    </a>

                    <a
                        href="#"
                        className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#1B2B45] text-[#94A3B8] hover:border-[#3B82F6] hover:text-white transition"
                    >
                        📧
                    </a>
                    </div>
                </div>

                {/* Resources */}
                <div>
                    <h3 className="font-semibold text-white">
                    Resources
                    </h3>

                    <ul className="mt-5 space-y-3 text-[#94A3B8]">
                    <li><a href="#" className="hover:text-white">Documentation</a></li>
                    <li><a href="#" className="hover:text-white">Tutorials</a></li>
                    <li><a href="#" className="hover:text-white">Blog</a></li>
                    <li><a href="#" className="hover:text-white">Projects</a></li>
                    </ul>
                </div>

                {/* Tools */}
                <div>
                    <h3 className="font-semibold text-white">
                    Tools
                    </h3>

                    <ul className="mt-5 space-y-3 text-[#94A3B8]">
                    <li><a href="#" className="hover:text-white">Code Generator</a></li>
                    <li><a href="#" className="hover:text-white">API Explorer</a></li>
                    <li><a href="#" className="hover:text-white">Dev Utilities</a></li>
                    <li><a href="#" className="hover:text-white">Templates</a></li>
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <h3 className="font-semibold text-white">
                    Company
                    </h3>

                    <ul className="mt-5 space-y-3 text-[#94A3B8]">
                    <li><a href="#" className="hover:text-white">About</a></li>
                    <li><a href="#" className="hover:text-white">Contact</a></li>
                    <li><a href="#" className="hover:text-white">Privacy</a></li>
                    <li><a href="#" className="hover:text-white">Terms</a></li>
                    </ul>
                </div>

                </div>

                {/* Divider */}
                <div className="my-10 border-t border-[#1B2B45]" />

                {/* Bottom */}
                <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row">
                <p className="text-sm text-[#94A3B8]">
                    © 2026 CraftDex. All rights reserved.
                </p>

                <div className="flex gap-6 text-sm text-[#94A3B8]">
                    <a href="#" className="hover:text-white transition">
                    Privacy Policy
                    </a>

                    <a href="#" className="hover:text-white transition">
                    Terms of Service
                    </a>

                    <a href="#" className="hover:text-white transition">
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