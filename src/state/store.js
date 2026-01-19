import { configureStore } from '@reduxjs/toolkit';
import agentReducer from './agent/agentSlice';

export const store = configureStore({
    reducer: {
        agent: agentReducer,
    },
});
