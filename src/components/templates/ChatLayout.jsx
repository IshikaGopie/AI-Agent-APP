import { Box } from "@mui/material";
import ChatAgentHeader from "../organisms /ChatAgentHeader.jsx";
import ChatConversation from "../organisms /ChatConversation.jsx";
import ChatInput from "../molecules/ChatInput.jsx";
import Typography from "@mui/material/Typography";

const messages = [
    {
        id: 1,
        text: "Hello! I'm planning a trip to Europe next summer. Can you help me with some recommendations?",
        isAgent: false,
    },
    {
        id: 2,
        text: "Great question! Based on my travel expertise...",
        isAgent: true,
    },
];

const ChatLayout = () => {
    return (
        <Box display="flex" height="98vh">
            <Box flex={1} display="flex" flexDirection="column">
                <ChatAgentHeader
                    agentName="Travel Expert"
                    description="Your personal travel advisor for destinations, itineraries, and tips"
                />

                <Box flex={1} overflow="hidden">
                    <ChatConversation messages={messages} />
                </Box>

                <ChatInput />

                <Box
                    sx={{
                        padding: "16px 20px",
                        backgroundColor: "#ffffff",
                        textAlign: "center",
                    }}
                    >
                    <Typography fontSize={14} color="#6b7280">
                        AI Agent can make mistakes. Make sure to check important information.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default ChatLayout;
