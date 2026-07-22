// dependencies
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";


// Typing animation for ai chat
export default function TypewriterMarkdown({
    text,
    speed = 10,
    onTyping,
    onComplete,
}) {
    const [displayed, setDisplayed] = useState("");

    // speed and velocity handler
    useEffect(() => {
        let i = 0;

        setDisplayed("");

        const timer = setInterval(() => {
            i++;

            setDisplayed(text.slice(0, i));

            onTyping?.();

            if (i >= text.length) {
                clearInterval(timer);
                onComplete?.();
            }
        }, speed);

        return () => clearInterval(timer);
    }, [text]);

    return (
        <div className="markdown-content text-[16px] leading-7 p-1">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {displayed}
            </ReactMarkdown>

            <span className="animate-pulse text-cyan-400">▋</span>
        </div>
    );
}