import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

function MarkdownViewer({ content }) {
  return (
  <article className="prose prose-invert max-w-none">
    <ReactMarkdown>{content}</ReactMarkdown>
  </article>
  );
}

export default MarkdownViewer;