// Dependencies
import { useEffect, useRef, useState } from "react";

// Icons
import { FaArrowUp } from "react-icons/fa";

function AiChatSection({rightSection, onKeyboardChange }){

    // ===================================================================================================================

    const [keyboardOpen, setKeyboardOpen] = useState(false);

    useEffect(() => {
        if (!window.visualViewport) return;

        const handleViewportResize = () => {
        const keyboardVisible =
            window.visualViewport.height < window.innerHeight * 0.8;

            setKeyboardOpen(keyboardVisible);
            onKeyboardChange(keyboardVisible);
        };
        window.visualViewport.addEventListener("resize", handleViewportResize);

        return () => {
            window.visualViewport.removeEventListener(
                "resize",
                handleViewportResize
            );
        };
    }, []);

    // ===================================================================================================================

    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);

    const messagesEndRef = useRef(null);

    const API_KEY = import.meta.env.VITE_GROQ_API_KEY;

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({
        behavior: "smooth",
        });
    }, [messages]);

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
                messages: updatedMessages,
            }),
            }
        );

        const data = await response.json();

        const aiMessage = {
            role: "assistant",
            content:
            data?.choices?.[0]?.message?.content ||
            "Sorry, I couldn't generate a response.",
        };

        setMessages((prev) => [...prev, aiMessage]);
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

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
        }
    };

    return(
        <div
        className={`${
            rightSection ? "flex" : "hidden"
        } flex-col items-center justify-center`}
        >



            {/* Messages */}
            <div className="flex-1 space-y-4 overflow-y-auto pt-4 pb-10 w-full">
                {messages.length === 0 && (
                <div className="mt-50 md:mt-70 text-center text-gray-400 text-3xl md:text-4xl font-semibold">
                    Ask Your Question to{" "}
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text font-bold text-transparent">
                        CraftDex AI
                    </span>
                </div>
                )}

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

                    <p className="whitespace-pre-wrap leading-7 text-[15px]">
                        {msg.content}
                    </p>
                    </div>
                </div>
                ))}

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
                <div className="flex w-full max-w-5xl items-end gap-3 rounded-full border border-slate-700/70 bg-slate-900/90 p-3 shadow-2xl backdrop-blur-xl transition-all">

                    <textarea
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
                    }}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask your FAQ..."
                    className="
                        max-h-40
                        flex-1
                        resize-none
                        overflow-y-auto
                        bg-transparent
                        px-2
                        py-2
                        text-[18px]
                        text-white
                        placeholder:text-slate-400
                        outline-none
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