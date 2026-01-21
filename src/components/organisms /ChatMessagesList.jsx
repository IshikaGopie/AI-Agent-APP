import { Box } from "@mui/material";
import ChatMessage from "../molecules/ChatMessage";
import LoadingBubble from "../atoms/LoadingBubble";

const ChatMessagesList = ({ messages, agentEmoji, agentColor, isLoadingResponse }) => {
    return (
        <Box
            sx={{
                flex: 1,
                padding: 3,
                display: "flex",
                flexDirection: "column",
                gap: 2,
                overflowY: "auto",
            }}
        >
            {messages.map((msg) => (
                <ChatMessage
                    key={msg.id}
                    text={msg.text}
                    isAgent={msg.isAgent}
                    agentEmoji={agentEmoji}
                    agentColor={agentColor}
                />
            ))}
            {isLoadingResponse && (
                <LoadingBubble agentEmoji={agentEmoji} agentColor={agentColor} />
            )}
        </Box>
    );
};

export default ChatMessagesList;
