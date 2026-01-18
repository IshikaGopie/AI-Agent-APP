import { Box } from "@mui/material";
import ChatMessage from "../molecules/ChatMessage";

const ChatMessagesList = ({ messages }) => {
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
                />
            ))}
        </Box>
    );
};

export default ChatMessagesList;
