import { useMemo, useState } from "react";
import { Box } from "@mui/material";
import Sidebar from "../components/organisms /SideBar.jsx";
import ChatLayout from "../components/templates/ChatLayout.jsx";

const Assistant = () => {
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

    // TODO: Fetch from API instead of hardcoding
    const agents = useMemo(() => ([
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
    ]), []);

    const createInitialSessions = () => ([
        {
            id: "chat-1",
            agentId: "travel",
            title: "New Travel Expert Chat",
            messages: [
                {
                    id: "msg-1",
                    text: "Hello! I'm planning a trip to Europe next summer. Can you help me with some recommendations?",
                    isAgent: false,
                },
                {
                    id: "msg-2",
                    text: "Great question! Based on my travel expertise...",
                    isAgent: true,
                },
            ],
            timestamp: "Just now",
        },
    ]);

    const [sessions, setSessions] = useState(createInitialSessions);
    const [activeChatId, setActiveChatId] = useState("chat-1");

    const activeChat = useMemo(
        () => sessions.find((session) => session.id === activeChatId) || sessions[0],
        [sessions, activeChatId]
    );

    const activeAgent = useMemo(
        () => agents.find((agent) => agent.id === activeChat?.agentId) || agents[0],
        [agents, activeChat]
    );

    const createSession = (agentId) => {
        const agent = agents.find((a) => a.id === agentId) || agents[0];
        const timestamp = "Just now";
        return {
            id: `chat-${Date.now()}`,
            agentId: agent.id,
            title: `New ${agent.name} Chat`,
            messages: [],
            timestamp,
        };
    };

    const handleSendMessage = (text) => {
        if (!activeChat) return;

        setSessions((prev) =>
            prev.map((session) =>
                session.id === activeChat.id
                    ? {
                        ...session,
                        messages: [
                            ...session.messages,
                            {
                                id: `msg-${Date.now()}`,
                                text,
                                isAgent: false,
                            },
                        ],
                        timestamp: "Just now",
                    }
                    : session
            )
        );
    };

    const handleNewChat = (agentId = activeAgent?.id) => {
        const session = createSession(agentId);
        setSessions((prev) => [session, ...prev]);
        setActiveChatId(session.id);
    };

    const handleSelectChat = (chatId) => {
        setActiveChatId(chatId);
    };

    const handleSwitchAgent = (agentId) => {
        const agent = agents.find((a) => a.id === agentId) || agents[0];
        if (!activeChat) {
            // create a new chat for that agent if no chat is active
            handleNewChat(agent.id);
            return;
        }

        const isCurrentEmpty = !activeChat.messages?.length;

        if (isCurrentEmpty) {
            // Reuse the current empty chat by switching its agent
            setSessions((prev) =>
                prev.map((session) =>
                    session.id === activeChat.id
                        ? {
                            ...session,
                            agentId: agent.id,
                            title: `New ${agent.name} Chat`,
                        }
                        : session
                )
            );
            return;
        }

        // switch to existing chat for that agent if present, else create a new one
        const existing = sessions.find((session) => session.agentId === agent.id);
        if (existing) {
            setActiveChatId(existing.id);
            return;
        }

        handleNewChat(agent.id);
    };

    return (
        <Box
            display="flex"
            height="100vh"
            width="100%"
            sx={{
                flexDirection: { xs: "column", md: "row" },
            }}
        >
            <Sidebar
                mobileOpen={isMobileSidebarOpen}
                onMobileClose={() => setIsMobileSidebarOpen(false)}
                agents={agents}
                chats={sessions}
                activeChatId={activeChat?.id}
                onNewChat={() => handleNewChat(activeAgent?.id)}
                onSelectChat={handleSelectChat}
            />

            <Box flex={1} minWidth={0}>
                <ChatLayout
                    onOpenSidebar={() => setIsMobileSidebarOpen(true)}
                    agents={agents}
                    activeAgent={activeAgent}
                    activeAgentId={activeAgent?.id}
                    messages={activeChat?.messages || []}
                    onSendMessage={handleSendMessage}
                    onSwitchAgent={handleSwitchAgent}
                />
            </Box>
        </Box>
    );
};

export default Assistant;
