// Dependencies
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Componenrt
import NavBarSection from '../component/NavBarSection'
import FooterComponentSection from '../component/FooterComponentSection'
import TopicsSection from '../component/ResourcePageComponent/TopicsSection'
import MarkdownViewer from '../component/ResourcePageComponent/MarkdownViewer'
import AiChatSection from'../component/ResourcePageComponent/AiChatSection'

// Icons
import { IoIosArrowForward } from "react-icons/io";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoSparklesSharp } from "react-icons/io5";

// Config
import { docs } from "../data/docs.js";


function ResourcesPage(){

    // ===================================================================================================================

    // Handling togle between 3 section
    const [activeSection, setActiveSection] = useState(null);

    const leftSection = activeSection === "left";
    const rightSection = activeSection === "right";

    // ===================================================================================================================

    // Handling document bar behaviour
    const [show, setShow] = useState(true);

    const setValue = (state) => {
        setShow(state);
    };

    // ===================================================================================================================

    const [selectedFile, setSelectedFile] = useState("craftdex/IntroductionOfCraftdex.md");
    const [markdown, setMarkdown] = useState("");

    useEffect(() => {
    if (!selectedFile) return;

    const url = `/docs/${selectedFile}`;

    fetch(url)
        .then(async (res) => {

        const text = await res.text();
        // console.log(text);

        setMarkdown(text);
        })
        .catch(console.error);
    }, [selectedFile]);

    // ===================================================================================================================

    const [search, setSearch] = useState("");

    const query = search.toLowerCase();

    const filteredDocs = docs.filter(doc =>
    doc.title.toLowerCase().includes(query) ||
    (doc.keywords || []).some(keyword =>
        keyword.toLowerCase().includes(query)
    )
    );

    // ===================================================================================================================

    const [keyboardOpen, setKeyboardOpen] = useState(false);

    return(
        <div className="flex flex-col items-center h-full">

            {/* Nav bar section */}
            <div className={`w-full`}>
                <NavBarSection onShowChange={setValue} className={`fixed top-0 left-0 z-50`} />
            </div>

            <div className={`fixed top-0 left-0 right-0 h-40 md:h-15 bg-gradient-to-b from-[#0B1220] via-[#0B1220]/40 z-10 ${show ? 'hidden' : 'fixed'}`} />


            {/* Docs Top Section */}
            <div
            className={`fixed left-1/2 w-full max-w-5xl -translate-x-1/2 px-2 transition-all duration-400 z-10 ${ show ? "top-15 md:top-18" : "top-3"}`}
            >
                <div
                    className="
                    flex items-center gap-3
                    rounded-full
                    border border-slate-700/70
                    bg-[#0B1220]/95
                    backdrop-blur-xl
                    shadow-2xl
                    px-3
                    py-2
                    "
                >
                    {/* Left Button */}
                    <button
                    onClick={() =>
                        setActiveSection(activeSection === "left" ? null : "left")
                    }
                    className={`
                        flex h-9 w-9 items-center justify-center
                        rounded-full
                        border border-slate-700
                        bg-[#101B2D]
                        text-white
                        transition-all
                        duration-300
                        hover:border-blue-500
                        hover:bg-[#17263F]
                        cursor-pointer
                        `}
                    >
                    <IoIosArrowForward
                        size={16}
                        className={`transition-transform duration-300 ${
                        activeSection === "left" ? "rotate-90" : ""
                        }`}
                    />
                    </button>

                    {/* Search */}
                    <div className="relative flex-1">
                    <FaMagnifyingGlass
                        size={17}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                        <input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            type="text"
                            placeholder="Search documentation..."
                            className="
                            w-full
                            rounded-full
                            border border-slate-700
                            bg-[#111C2E]
                            py-2
                            pl-11
                            pr-4
                            text-sm
                            text-white
                            outline-none
                            transition-all
                            duration-300
                            placeholder:text-slate-500
                            focus:border-blue-500
                            focus:ring-2
                            focus:ring-blue-500/20
                            "
                        />
                    </div>

                    {/* Right Button */}
                    <button
                    onClick={() =>
                        setActiveSection(activeSection === "right" ? null : "right")
                    }
                    className="
                        flex h-9 w-9 items-center justify-center
                        rounded-full
                        border border-slate-700
                        bg-[#101B2D]
                        text-white
                        transition-all
                        duration-300
                        hover:border-blue-500
                        hover:bg-[#17263F]
                        cursor-pointer
                    "
                    >
                    <IoSparklesSharp
                        size={16}
                        className={`transition-transform duration-300 ${
                        activeSection === "right" ? "rotate-180" : ""
                        }`}
                    />
                    </button>
                </div>

                {
                search && (
                    <div className="absolute left-0 right-0 top-full mt-2 rounded-xl bg-[#111C2E] border border-slate-700 overflow-hidden z-50 mx-2">

                        {filteredDocs.length ? (
                            filteredDocs.map(doc => (
                                <button
                                    key={doc.path}
                                    className="w-full text-left px-4 py-3 hover:bg-slate-700"
                                    onClick={() => {
                                        setSelectedFile(doc.path);
                                        setSearch("");
                                    }}
                                >
                                    {doc.title}
                                </button>
                            ))
                        ) : (
                            <div className="px-4 py-3 text-slate-400">
                                No document found
                            </div>
                        )}

                    </div>
                )
                }
            </div>


            {/* Documentation nav bar */}
            <div className="w-full max-w-5xl mt-28 md:mt-32 mb-12">

                {/* docs main section */}
                <div className="px-2 mt-2.5">

                    {/* topic section */}
                    <TopicsSection
                    leftSection={leftSection}
                    onSelectFile={setSelectedFile}
                    activeFile={selectedFile}
                    setActiveSection={setActiveSection}
                    />

                    {/* docs section */}
                    <div 
                        className={`rounded-2xl border bg-[#050B18] text-[#E2E8F0] overflow-hidden
                        ${
                        leftSection || rightSection
                            ? "hidden"
                            : "p-8 border-[#1B2B45]"
                        }`}
                    >
                        <MarkdownViewer content={markdown} />
                    </div>

                    {/* Ai chat section */}
                    <AiChatSection 
                    rightSection={rightSection}
                    onKeyboardChange={setKeyboardOpen}
                    />

                </div>

            </div>

            <div className={`fixed bottom-0 left-0 right-0 h-40 md:h-15 bg-gradient-to-t from-[#0B1220] via-[#0B1220]/40`} />

        </div>
    )
}

export default ResourcesPage;