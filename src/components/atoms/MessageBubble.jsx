import { Box } from "@mui/material";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark, oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

const MessageBubble = ({ children, isAgent }) => {
    return (
        <Box
            sx={{
                padding: "14px 18px",
                borderRadius: "16px",
                maxWidth: "650px",
                backgroundColor: isAgent ? "#ffffff" : "#2563eb",
                color: isAgent ? "#0f172a" : "#ffffff",
                border: isAgent ? "1px solid #e5e7eb" : "none",
            }}
        >
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                    code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || "");
                        return !inline && match ? (
                            <SyntaxHighlighter
                                style={isAgent ? oneLight : oneDark}
                                language={match[1]}
                                PreTag="div"
                                {...props}
                            >
                                {String(children).replace(/\n$/, "")}
                            </SyntaxHighlighter>
                        ) : (
                            <code className={className} {...props}>
                                {children}
                            </code>
                        );
                    },
                }}
            >
                {children}
            </ReactMarkdown>
        </Box>
    );
};

export default MessageBubble;
