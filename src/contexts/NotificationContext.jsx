import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';
import { Snackbar, Alert } from '@mui/material';

const NotificationContext = createContext(undefined);

export const useNotification = () => {
    const context = useContext(NotificationContext);
    if (!context) {
        throw new Error('useNotification must be used within a NotificationProvider');
    }
    return context;
};

export const NotificationProvider = ({ children }) => {
    const [notification, setNotification] = useState({ open: false, message: '', severity: 'error' });

    const showError = useCallback((message) => {
        setNotification({ open: true, message, severity: 'error' });
    }, []);

    const showSuccess = useCallback((message) => {
        setNotification({ open: true, message, severity: 'success' });
    }, []);

    const handleClose = useCallback(() => {
        setNotification((prev) => ({ ...prev, open: false }));
    }, []);

    const contextValue = useMemo(() => ({ showError, showSuccess }), [showError, showSuccess]);

    return (
        <NotificationContext.Provider value={contextValue}>
            {children}
            <Snackbar
                open={notification.open}
                autoHideDuration={6000}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
                <Alert onClose={handleClose} severity={notification.severity} sx={{ width: '100%' }}>
                    {notification.message}
                </Alert>
            </Snackbar>
        </NotificationContext.Provider>
    );
};
