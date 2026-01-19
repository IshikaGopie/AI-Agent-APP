import { useState } from "react";
import { Box } from "@mui/material";

import ChatInput from "../molecules/ChatInput.jsx";
import Typography from "@mui/material/Typography";
import ChatAgentHeader from "../organisms /ChatAgentHeader.jsx";
import ChatConversation from "../organisms /ChatConversation.jsx";

// Example messages
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

// TODO: get from API and store using redux
const agents = [
    {
        id: "travel",
        emoji: "✈️",
        iconBg: "#3b82f6",
        name: "Travel Expert",
        description:
            "Your personal travel advisor for destinations, itineraries, and tips",
        tags: ["Destinations", "Itineraries", "Travel Tips", "Culture"],
    },
    {
        id: "construction",
        emoji: "🏗️",
        iconBg: "#f59e0b",
        name: "Construction Specialist",
        description:
            "Expert guidance on building, renovation, and construction projects",
        tags: ["Building", "Renovation", "Materials", "Safety"],
    },
    {
        id: "health",
        emoji: "💪",
        iconBg: "#10b981",
        name: "Health & Wellness",
        description:
            "Guidance on fitness, nutrition, and overall wellbeing",
        tags: ["Fitness", "Nutrition", "Mental Health", "Lifestyle"],
    },
    {
        id: "finance",
        emoji: "💰",
        iconBg: "#8b5cf6",
        name: "Financial Advisor",
        description:
            "Smart financial planning, budgeting, and investment insights",
        tags: ["Budgeting", "Investing", "Savings", "Planning"],
    },
    {
        id: "tech",
        emoji: "💻",
        iconBg: "#ec4899",
        name: "Tech Guru",
        description:
            "Technology solutions, programming help, and digital trends",
        tags: ["Programming", "Cloud", "AI", "Security"],
    },
    {
        id: "legal",
        emoji: "⚖️",
        iconBg: "#6366f1",
        name: "Legal Assistant",
        description:
            "General legal information and guidance (not legal advice)",
        tags: ["Contracts", "Rights", "Business Law", "Property"],
    },
];

const ChatLayout = ({ onOpenSidebar }) => {
    const [activeAgentId, setActiveAgentId] = useState("travel"); // default agent

    // Get active agent details
    const activeAgent = agents.find(agent => agent.id === activeAgentId);

    // Handler when switching agent
    const handleSwitchAgent = (agentId) => {
        setActiveAgentId(agentId);
    };

    return (
        <Box
            display="flex"
            sx={{
                height: { xs: "100vh", md: "98vh" },
            }}
        >
            <Box flex={1} display="flex" flexDirection="column" minWidth={0}>
                <ChatAgentHeader
                    agentName={activeAgent.name}
                    description={activeAgent.description}
                    onSwitchAgent={handleSwitchAgent}
                    onMenuClick={onOpenSidebar}
                    agents={agents}
                    activeAgentId={activeAgentId}
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
