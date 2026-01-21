import { Box } from "@mui/material";

import ChatInput from "../molecules/ChatInput.jsx";
import Typography from "@mui/material/Typography";
import ChatAgentHeader from "../organisms /ChatAgentHeader.jsx";
import ChatConversation from "../organisms /ChatConversation.jsx";

const ChatLayout = ({
                        onOpenSidebar,
                        agents = [],
                        activeAgent,
                        activeAgentId,
                        messages = [],
                        onSendMessage,
                        onSwitchAgent,
                        isLoadingResponse = false,
                    }) => {
    const resolvedAgent =
        activeAgent ||
        agents.find((agent) => agent.id === activeAgentId) ||
        agents[0];

    return (
        <Box
            display="flex"
            sx={{
                height: { xs: "100vh", md: "98vh" },
            }}
        >
            <Box flex={1} display="flex" flexDirection="column" minWidth={0}>
                <ChatAgentHeader
                    agentName={resolvedAgent?.name}
                    description={resolvedAgent?.description}
                    agentEmoji={resolvedAgent?.emoji}
                    agentColor={resolvedAgent?.iconBg}
                    onSwitchAgent={onSwitchAgent}
                    onMenuClick={onOpenSidebar}
                    agents={agents}
                    activeAgentId={resolvedAgent?.id}
                />

                <Box flex={1} overflow="hidden">
                    <ChatConversation
                        messages={messages}
                        agentEmoji={resolvedAgent?.emoji}
                        agentColor={resolvedAgent?.iconBg}
                        agentName={resolvedAgent?.name}
                        agentDescription={resolvedAgent?.description}
                        agentExamples={resolvedAgent?.examples}
                        isLoadingResponse={isLoadingResponse}
                    />
                </Box>

                <ChatInput
                    onSend={onSendMessage}
                    placeholder={`Message ${resolvedAgent?.name || "Agent"}...`}
                />

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
