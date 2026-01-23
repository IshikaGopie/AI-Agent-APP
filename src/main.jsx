import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { store } from './state/store.js';
import { NotificationProvider } from './contexts/NotificationContext.jsx';

const root = createRoot(document.getElementById('root'));

root.render(
    <StrictMode>
        <Provider store={store}>
            <NotificationProvider>
                <App />
            </NotificationProvider>
        </Provider>
    </StrictMode>
);
