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
    updateSessionId,
    setLoadingResponse,
    deleteSession,
    clearConversationMessages,
    updateSessionTitle
} from "../state/agent/agentSlice";

const Assistant = () => {
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

    const agents = useSelector((state) => state.agent.agents);
    const sessions = useSelector((state) => state.agent.sessions);
    const activeChatId = useSelector((state) => state.agent.activeChatId);
    const isLoadingResponse = useSelector((state) => state.agent.isLoadingResponse);

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

    // load conversations on mount
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

    // create a new chat if no convos were found
    useEffect(() => {
        if (agents.length > 0 && sessions.length === 0) {
            dispatch(newChat(agents[0].id));
        }
    }, [agents, sessions, dispatch]);

    // load messages for the active chat
    useEffect(() => {
        if (!activeChat?.id || (activeChat.messages && activeChat.messages.length)) {
            return;
        }

        // Skip loading messages for new local sessions
        if (activeChat.id?.startsWith('chat-')) {
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

    const handleSendMessage = async (text) => {
        if (!text?.trim() || !activeChat || !activeAgent) return;

        // check if this is a new chat that needs to be created
        const isNewChat = activeChat.id?.startsWith('chat-') && !activeChat.isCleared;
        let conversationId = activeChat.id;

        // create convo on first message
        if (isNewChat) {
            try {
                const conversation = await aiAgentService.createConversation(activeAgent.id);
                console.log('conversation', conversation);
                if (conversation?.id) {
                    conversationId = conversation.id;
                    // Update the active chat in state
                    dispatch(updateSessionId({
                        oldId: activeChat.id,
                        newId: conversationId,
                    }));
                }
            } catch (err) {
                console.error("createConversation failed:", err);
                return;
            }
        }

        // add user message to state
        dispatch(sendMessage(text));

        // set loading state to show loading bubble
        dispatch(setLoadingResponse(true));

        // send message to AI agent
        try {
            const response = await aiAgentService.chat(conversationId, text);
            if (response) {
                // load messages from API and update state
                const messages = await aiAgentService.getConversationMessages(conversationId);
                if (Array.isArray(messages)) {
                    dispatch(
                        setConversationMessages({
                            conversationId,
                            messages,
                        }),
                    );
                }
            }
        } catch (err) {
            console.error("chat failed:", err);
        } finally {
            // update loading state to hide loading bubble
            dispatch(setLoadingResponse(false));
        }

        // get conversation by id to update title
        aiAgentService.getConversation(conversationId)
            .then((conversation) => {
                dispatch(updateSessionTitle({ sessionId: conversationId, title: conversation.title }));
            })
            .catch((err) => console.error("getConversation failed:", err));
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

    const deleteChat = (chatId) => {
        aiAgentService.deleteConversation(chatId).then(() => {
            dispatch(deleteSession(chatId));
        }).catch((err) => console.error("deleteConversation failed:", err));
    }

    const clearConversation = () => {
        aiAgentService.clearConversation(activeChat?.id)
            .then(() => {
                dispatch(clearConversationMessages(activeChat?.id));
            })
            .catch((err) => console.error("clearConversation failed:", err));
    }

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
                onDeleteChat={deleteChat}
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
                    isLoadingResponse={isLoadingResponse}
                    onClear={clearConversation}
                />
            </Box>
        </Box>
    );
};

export default Assistant;
