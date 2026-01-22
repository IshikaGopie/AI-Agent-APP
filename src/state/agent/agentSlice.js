import { createSlice } from '@reduxjs/toolkit';

const createSession = (agent) => ({
    id: `chat-${Date.now()}`,
    agentId: agent.id,
    title: `New ${agent.name} Chat`,
    messages: [],
    timestamp: 'Just now',
});

const initialState = {
    agents: [], // list of agents fetched from the API
    sessions: [], // conversations fetched from the API
    activeChatId: null, // id of the active chat
    isLoadingResponse: false, // loading state for AI response
    isCleared: false, // flag to indicate if the conversation was cleared
};

const agentSlice = createSlice({
    name: 'agent',
    initialState,
    reducers: {
        setAgents: (state, action) => {
            const agents = action.payload;
            if (!Array.isArray(agents) || !agents.length) return;
            state.agents = agents;
        },

        // set the list of conversations fetched from the API
        setSessions: (state, action) => {
            const conversations = action.payload;
            if (!Array.isArray(conversations) || !conversations.length) return;

            state.sessions = conversations.map((conversation) => ({
                id: conversation.id,
                agentId: conversation.agent,
                title:
                    typeof conversation.title === 'string'
                        ? conversation.title.replace(/^"(.*)"$/, '$1')
                        : conversation.title,
                messages: [],
                timestamp: conversation.createdAt,
            }));

            state.activeChatId = state.sessions[0]?.id ?? null;
        },
        setConversationMessages: (state, action) => {
            const { conversationId, messages } = action.payload || {};
            if (!conversationId || !Array.isArray(messages)) return;

            const session = state.sessions.find(
                (s) => s.id === conversationId,
            );
            if (!session) return;

            session.messages = messages.map((message) => ({
                id: message.id,
                text: message.content,
                isAgent: message.role === 'assistant',
                timestamp: message.timestamp,
            }));

            // set the timestamp to the time of the last message in the conversation
            if (session.messages.length) {
                session.timestamp =
                    session.messages[session.messages.length - 1].timestamp;
            }
        },
        sendMessage: (state, action) => {
            const text = action.payload;
            const activeChat = state.sessions.find(
                (session) => session.id === state.activeChatId,
            );
            if (!activeChat || !text?.trim()) return;

            activeChat.messages.push({
                id: `msg-${Date.now()}`,
                text,
                isAgent: false,
            })

            activeChat.timestamp = 'Just now';
            // Clear the isCleared flag since we're adding a new message
            if (activeChat.isCleared) {
                activeChat.isCleared = false;
            }
        },
        newChat: (state, action) => {
            const agentId = action.payload;
            const agent =
                state.agents.find((a) => a.id === agentId) ?? state.agents[0];
            if (!agent) return;

            const session = createSession(agent);
            state.sessions.unshift(session);
            state.activeChatId = session.id;
        },
        selectChat: (state, action) => {
            state.activeChatId = action.payload;
        },
        switchAgent: (state, action) => {
            const agentId = action.payload;
            const agent =
                state.agents.find((a) => a.id === agentId) ?? state.agents[0];
            if (!agent) return;

            const activeChat = state.sessions.find(
                (session) => session.id === state.activeChatId,
            );

            if (!activeChat) {
                // create a new chat for that agent if no chat is active
                const session = createSession(agent);
                state.sessions.unshift(session);
                state.activeChatId = session.id;
                return;
            }

            const isCurrentEmpty = !activeChat.messages?.length;

            if (isCurrentEmpty) {
                // use the same chat for that agent if it's empty otherwisee else create a new one'
                activeChat.agentId = agent.id;
                activeChat.title = `New ${agent.name} Chat`;
                return;
            }

            // switch to an existing chat for that agent if present otherwise create a new one
            const existing = state.sessions.find(
                (session) => session.agentId === agent.id,
            );
            if (existing) {
                state.activeChatId = existing.id;
                return;
            }

            const session = createSession(agent);
            state.sessions.unshift(session);
            state.activeChatId = session.id;
        },
        updateSessionId: (state, action) => {
            const { oldId, newId } = action.payload;
            const session = state.sessions.find((s) => s.id === oldId);
            if (!session) return;

            session.id = newId;
            if (state.activeChatId === oldId) {
                state.activeChatId = newId;
            }
        },
        updateSessionTitle: (state, action) => {
            const { sessionId, title } = action.payload;
            const session = state.sessions.find((s) => s.id === sessionId);
            if (!session || !title) return;

            session.title = typeof title === 'string'
                ? title.replace(/^"(.*)"$/, '$1')
                : title;
        },
        setLoadingResponse: (state, action) => {
            state.isLoadingResponse = action.payload;
        },
        clearConversationMessages: (state, action) => {
            const chatId = action.payload;
            const chatIndex = state.sessions.findIndex((s) => s.id === chatId);
            if (chatIndex === -1) return;
            const session = state.sessions[chatIndex];
            session.messages = [];
            session.timestamp = 'Just now';
            // Mark that this is a cleared existing conversation not a new one
            session.isCleared = true;

        },
        deleteSession: (state, action) => {
            const chatId = action.payload;
            const chatIndex = state.sessions.findIndex((s) => s.id === chatId);
            if (chatIndex === -1) return;

            // Remove the chat from sessions
            state.sessions.splice(chatIndex, 1);

            // If the deleted chat was activeselect another chat
            if (state.activeChatId === chatId) {
                // If there are no more chats set activeChatId to null
                if (state.sessions.length > 0) {
                    const newIndex = chatIndex < state.sessions.length ? chatIndex : chatIndex - 1;
                    state.activeChatId = state.sessions[newIndex]?.id ?? state.sessions[0]?.id ?? null;
                } else {
                    state.activeChatId = null;
                }
            }
        },
    },
});

export const {
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
    updateSessionTitle,
} = agentSlice.actions;

export default agentSlice.reducer;

