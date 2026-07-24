// Dependencies
import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// Icons
import { FaArrowUp } from "react-icons/fa";

// Component
import TypewriterMarkdown from "./TypewriterMarkdown";

function AiChatSection({rightSection, onKeyboardChange }){

    // ===================================================================================================================

    // Provide documentation .md file to API model
    const [docs, setDocs] = useState("");

    useEffect(() => {
    async function loadDocs() {
        const files = [
        "/docs/faq/faq.md",
        "/docs/craftdex/IntroductionOfCraftdex.md",
        "/docs/imagetopdf/IntroductionOfITPC.md",
        "/docs/logchart/IntroductionOfLogchart.md",
        ];

        const contents = await Promise.all(
        files.map(async (file) => {
            const res = await fetch(file);
            return await res.text();
        })
        );

        setDocs(contents.join("\n\n-----------------\n\n"));
    }

    loadDocs();
    }, []);

    // ===================================================================================================================

    // Integret API model with model preference and conversation state management
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const textareaRef = useRef(null);

    const [typingIndex, setTypingIndex] = useState(null);

    const messagesEndRef = useRef(null);

    const chatContainerRef = useRef(null);
    const [autoScroll, setAutoScroll] = useState(true);

    const API_KEY = import.meta.env.VITE_GROQ_API_KEY;  // Model api

    useEffect(() => {
        scrollToBottom();
    }, [messages, autoScroll]);

    // Send's query to model and protocol of ethics
    const sendMessage = async () => {
        if (!message.trim() || loading) return;

        const userMessage = {
        role: "user",
        content: message,
        };

        const updatedMessages = [...messages, userMessage];

        setMessages(updatedMessages);
        setMessage("");
        setLoading(true);

        try {
        const response = await fetch(
            "https://api.groq.com/openai/v1/chat/completions",
            {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${API_KEY}`,
            },
            body: JSON.stringify({
            model: "llama-3.3-70b-versatile",
            messages: [
                {
                role: "system",
                content: `
                You are CraftDex AI Assistant.

                Your role is to assist users with both the CraftDex application and general knowledge.

                ## Personality
                - Friendly, professional, and helpful.
                - Answer naturally like ChatGPT.
                - Keep responses concise unless the user asks for more detail.
                - Format responses using Markdown.

                ## Documentation Rules

                When a question is about CraftDex, its features, APIs, installation, configuration, usage, troubleshooting, or documentation:

                - Use ONLY the documentation provided below.
                - Never invent undocumented features.
                - If the answer isn't available in the documentation, reply:

                "I couldn't find that information in the CraftDex documentation."

                ## General Knowledge

                If the question is NOT related to CraftDex documentation, you may answer normally using your own knowledge.

                Examples:
                - Programming (Python, JavaScript, React, Java, C++, SQL, etc.)
                - Web development
                - Algorithms
                - Career guidance
                - Basic mathematics
                - Science
                - Technology
                - Greetings and casual conversation

                ## Important

                If a question mentions CraftDex or its features, always prioritize the documentation instead of your own knowledge.

                Documentation:

                ${docs}
                `
                },
                ...updatedMessages,
            ],
            })
            }
        );

        const data = await response.json();

        // Handle API errors
        if (!response.ok) {
            let errorMessage = "Something went wrong. Please try again.";

            if (data?.error?.code === "rate_limit_exceeded") {
                errorMessage =
                    "⚠️ Daily AI limit reached. Please try again later or after your quota resets.";
            } else if (data?.error?.message) {
                errorMessage = data.error.message;
            }

            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    content: errorMessage,
                },
            ]);

            setLoading(false);
            return;
        }

        const aiMessage = {
            role: "assistant",
            content:
            data?.choices?.[0]?.message?.content ||
            "Sorry, I couldn't generate a response.",
        };

        setMessages((prev) => {
            const updated = [...prev, aiMessage];

            setTypingIndex(updated.length - 1);

            return updated;
        });
        } catch (error) {
        setMessages((prev) => [
            ...prev,
            {
            role: "assistant",
            content: "Something went wrong. Please try again.",
            },
        ]);

        console.error(error);
        }

        setLoading(false);
    };

    // button
    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
        }
    };

    // Handle input field layout
    const handleInput = (e) => {
        setMessage(e.target.value);

        e.target.style.height = "0px";

        const height = Math.min(e.target.scrollHeight, 160);

        e.target.style.height = `${height}px`;
    };

    const handleScroll = () => {
        const container = chatContainerRef.current;
        if (!container) return;

        const threshold = 80; // px

        const isNearBottom =
            container.scrollHeight -
            container.scrollTop -
            container.clientHeight <
            threshold;

        setAutoScroll(isNearBottom);
    };

    const scrollToBottom = () => {
        if (!autoScroll) return;

        messagesEndRef.current?.scrollIntoView({
            behavior: "smooth",
        });
    };

    // ===================================================================================================================

    return(
        <div
        className={`${
            rightSection ? "flex" : "hidden"
        } flex-col items-center justify-center`}
        >



            {/* Messages */}
            <div 
              ref={chatContainerRef}
                onScroll={handleScroll}
                className="flex-1 space-y-4 overflow-y-auto pt-4 pb-10 w-full"
            >
                {/* Title */}
                {messages.length === 0 && (
                <div className="mt-50 md:mt-70 text-center text-gray-400 text-3xl md:text-4xl font-semibold">
                    Ask Your Question to{" "}
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text font-bold text-transparent">
                        CraftDex AI
                    </span>
                </div>
                )}

                {/* Message */}
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`flex ${
                        msg.role === "user" ? "justify-end" : "justify-start"
                        }`}
                    >
                        <div
                        className={`relative max-w-[85%] rounded-3xl px-4 py-3 shadow-lg backdrop-blur-md transition-all ${
                            msg.role === "user"
                            ? "rounded-br-md bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-cyan-500/20"
                            : "rounded-bl-md border border-white/10 bg-white/10 text-slate-100 shadow-black/30"
                        }`}
                        >

                        {msg.role === "assistant" ? (
                            typingIndex === index ? (
                                <TypewriterMarkdown
                                    text={msg.content}
                                    speed={8}
                                    onTyping={scrollToBottom}
                                    onComplete={() => setTypingIndex(null)}
                                />
                            ) : (
                                <div className="markdown-content text-[16px] leading-7 p-1">
                                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                        {msg.content}
                                    </ReactMarkdown>
                                </div>
                            )
                        ) : (
                            <p className="whitespace-pre-wrap text-[16px] leading-7 p-1">
                                {msg.content}
                            </p>
                        )}
                        </div>
                    </div>
                ))}

                {/* Loading */}
                {loading && (
                <div className="flex justify-start">
                    <div className="rounded-2xl border bg-white px-4 py-3 shadow">
                    <div className="flex gap-1">
                        <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400"></span>
                        <span
                        className="h-2 w-2 animate-bounce rounded-full bg-gray-400"
                        style={{ animationDelay: "0.2s" }}
                        ></span>
                        <span
                        className="h-2 w-2 animate-bounce rounded-full bg-gray-400"
                        style={{ animationDelay: "0.4s" }}
                        ></span>
                    </div>
                    </div>
                </div>
                )}

                <div ref={messagesEndRef} />
            </div>

            {/* Chat Input */}
            <div className="fixed inset-x-0 bottom-3 z-50 flex justify-center px-2">
                <div className="flex w-full max-w-5xl items-center gap-3 rounded-full border border-slate-700/70 bg-slate-900/90 p-3 shadow-2xl backdrop-blur-xl transition-all">

                    <textarea
                    ref={textareaRef}
                    rows={1}
                    value={message}
                    onChange={(e) => {
                        setMessage(e.target.value);

                        // Auto resize
                        e.target.style.height = "auto";
                        e.target.style.height = `${Math.min(
                        e.target.scrollHeight,
                        160
                        )}px`;
                        handleInput
                    }}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask your Query..."
                    className="
                        flex-1
                        resize-none
                        overflow-y-auto
                        bg-transparent
                        text-white
                        text-base
                        leading-6
                        placeholder:text-slate-400
                        outline-none
                        max-h-40
                        py-2 px-4
                    "
                    />

                    <button
                    onClick={sendMessage}
                    disabled={loading || !message.trim()}
                    className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-full
                        bg-gradient-to-r
                        from-cyan-500
                        to-blue-600
                        text-white
                        shadow-lg
                        transition-all
                        duration-200
                        hover:scale-105
                        hover:shadow-cyan-500/30
                        active:scale-95
                        disabled:cursor-not-allowed
                        disabled:opacity-40
                    "
                    >
                    {loading ? (
                        <svg
                        className="h-5 w-5 animate-spin"
                        viewBox="0 0 24 24"
                        fill="none"
                        >
                        <circle
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="3"
                            className="opacity-20"
                        />
                        <path
                            d="M22 12A10 10 0 0012 2"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                        />
                        </svg>
                    ) : (
                        <FaArrowUp size={14} />
                    )}
                    </button>
                </div>
            </div>
            
        </div>
    )
}

export default AiChatSection;