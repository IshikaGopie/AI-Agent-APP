import { createSlice } from '@reduxjs/toolkit';

// TODO: fetch agents from API
const initialAgents = [
    {
        id: 'travel',
        emoji: '✈️',
        iconBg: '#3b82f6',
        name: 'Travel Expert',
        description:
            'Your personal travel advisor for destinations, itineraries, and tips',
        tags: ['Destinations', 'Itineraries', 'Travel Tips', 'Culture'],
    },
    {
        id: 'construction',
        emoji: '🏗️',
        iconBg: '#f59e0b',
        name: 'Construction Specialist',
        description:
            'Expert guidance on building, renovation, and construction projects',
        tags: ['Building', 'Renovation', 'Materials', 'Safety'],
    },
    {
        id: 'health',
        emoji: '💪',
        iconBg: '#10b981',
        name: 'Health & Wellness',
        description:
            'Guidance on fitness, nutrition, and overall wellbeing',
        tags: ['Fitness', 'Nutrition', 'Mental Health', 'Lifestyle'],
    },
    {
        id: 'finance',
        emoji: '💰',
        iconBg: '#8b5cf6',
        name: 'Financial Advisor',
        description:
            'Smart financial planning, budgeting, and investment insights',
        tags: ['Budgeting', 'Investing', 'Savings', 'Planning'],
    },
    {
        id: 'tech',
        emoji: '💻',
        iconBg: '#ec4899',
        name: 'Tech Guru',
        description:
            'Technology solutions, programming help, and digital trends',
        tags: ['Programming', 'Cloud', 'AI', 'Security'],
    },
    {
        id: 'legal',
        emoji: '⚖️',
        iconBg: '#6366f1',
        name: 'Legal Assistant',
        description:
            'General legal information and guidance (not legal advice)',
        tags: ['Contracts', 'Rights', 'Business Law', 'Property'],
    },
];

const createSession = (agent) => ({
    id: `chat-${Date.now()}`,
    agentId: agent.id,
    title: `New ${agent.name} Chat`,
    messages: [],
    timestamp: 'Just now',
});

// TODO: fetch chats from API
const createInitialSessions = () => ([
    {
        id: 'chat-1',
        agentId: 'travel',
        title: 'New Travel Expert Chat',
        messages: [
            {
                id: 'msg-1',
                text: "Hello! I'm planning a trip to Europe next summer. Can you help me with some recommendations?",
                isAgent: false,
            },
            {
                id: 'msg-2',
                text: 'Great question! Based on my travel expertise...',
                isAgent: true,
            },
        ],
        timestamp: 'Just now',
    },
]);

const initialState = {
    agents: initialAgents,
    sessions: createInitialSessions(),
    activeChatId: 'chat-1',
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
            });
            activeChat.timestamp = 'Just now';
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
    },
});

export const {
    setAgents,
    sendMessage,
    newChat,
    selectChat,
    switchAgent,
} = agentSlice.actions;

export default agentSlice.reducer;

