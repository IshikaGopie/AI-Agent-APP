import { Box } from "@mui/material";
import MessageBubble from "../atoms/MessageBubble";

const ChatMessage = ({ text, isAgent, agentEmoji, agentColor  }) => {
    return (
        <Box
            sx={{
                display: "flex",
                gap: 2,
                justifyContent: isAgent ? "flex-start" : "flex-end",
                alignItems: "flex-start",
            }}
        >
            {isAgent && (
                <Box
                    sx={{
                        width: 40,
                        height: 40,
                        borderRadius: "12px",
                        backgroundColor: agentColor,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 18,
                    }}
                >
                    {agentEmoji}
                </Box>
                //  TODO: Replace with agent's avatar
            )}

            <MessageBubble isAgent={isAgent}>
                {text}
            </MessageBubble>
        </Box>
    );
};

export default ChatMessage;
