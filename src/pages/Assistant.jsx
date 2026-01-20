import { useEffect, useMemo, useState } from "react";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../components/organisms /SideBar.jsx";
import ChatLayout from "../components/templates/ChatLayout.jsx";
import { aiAgentService } from '../plugins/01.services';
import {
    setAgents,
    setSessions,
    setConversationMessages,
    sendMessage,
    newChat,
    selectChat,
    switchAgent,
} from "../state/agent/agentSlice";

const Assistant = () => {
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

    const agents = useSelector((state) => state.agent.agents);
    const sessions = useSelector((state) => state.agent.sessions);
    const activeChatId = useSelector((state) => state.agent.activeChatId);

    const dispatch = useDispatch();

    useEffect(() => {
        aiAgentService
            .getAgents()
            .then((data) => {
                if (Array.isArray(data) && data.length) {
                    dispatch(setAgents(data));
                }
            })
            .catch((err) => console.error("getAgents failed:", err));
    }, [dispatch]);

    const activeChat = useMemo(
        () => sessions.find((session) => session.id === activeChatId) || sessions[0],
        [sessions, activeChatId]
    );

    const activeAgent = useMemo(
        () =>
            agents.find(
                (agent) =>
                    agent.id === activeChat?.agentId ||
                    agent.name === activeChat?.agentId,
            ) || agents[0],
        [agents, activeChat]
    );

    // Load conversations on mount
    useEffect(() => {
        aiAgentService
            .getConversations()
            .then((data) => {
                if (Array.isArray(data) && data.length) {
                    dispatch(setSessions(data));
                }
            })
            .catch((err) => console.error("getConversations failed:", err));
    }, [dispatch]);

    // Load messages for the active chat
    useEffect(() => {
        if (!activeChat?.id || (activeChat.messages && activeChat.messages.length)) {
            return;
        }

        aiAgentService
            .getConversationMessages(activeChat.id)
            .then((data) => {
                if (Array.isArray(data)) {
                    dispatch(
                        setConversationMessages({
                            conversationId: activeChat.id,
                            messages: data,
                        }),
                    );
                }
            })
            .catch((err) =>
                console.error("getConversationMessages failed:", err),
            );
    }, [activeChat?.id]);

    const handleSendMessage = (text) => {
        dispatch(sendMessage(text));
    };

    const handleNewChat = (agentId = activeAgent?.id) => {
        dispatch(newChat(agentId));
    };

    const handleSelectChat = (chatId) => {
        dispatch(selectChat(chatId));

        aiAgentService
            .getConversationMessages(chatId)
            .then((data) => {
                if (Array.isArray(data)) {
                    dispatch(
                        setConversationMessages({
                            conversationId: chatId,
                            messages: data,
                        }),
                    );
                }
            })
            .catch((err) =>
                console.error("getConversationMessages failed:", err),
            );
    };

    const handleSwitchAgent = (agentId) => {
        dispatch(switchAgent(agentId));
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
