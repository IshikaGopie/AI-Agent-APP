import { Box } from "@mui/material";
import MessageBubble from "../atoms/MessageBubble";

const ChatMessage = ({ text, isAgent }) => {
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
                        backgroundColor: "#3b82f6",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 18,
                    }}
                >
                    ✈️
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
