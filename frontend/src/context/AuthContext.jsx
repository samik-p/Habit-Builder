import React, { createContext, useState, useEffect, useContext } from 'react';
import { loginUser, registerUser, refreshToken } from '../api/apiService'; // Import API functions
import { Snackbar, Alert } from '@mui/material'; // For notifications

// Create the Auth Context
export const AuthContext = createContext(null);

// Custom hook to use the AuthContext
export const useAuth = () => {
    return useContext(AuthContext);
};

// Auth Provider component
export const AuthProvider = ({ children }) => {
    // State to hold user data and authentication status
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true); // To manage initial loading of user state

    // State for Snackbar notifications
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('info');

    const showSnackbar = (message, severity) => {
        setSnackbarMessage(message);
        setSnackbarSeverity(severity);
        setSnackbarOpen(true);
    };

    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbarOpen(false);
    };

    // Effect to check for stored tokens on app load
    useEffect(() => {
        const loadUser = async () => {
            const storedAccessToken = localStorage.getItem('accessToken');
            const storedRefreshToken = localStorage.getItem('refreshToken');

            if (storedAccessToken && storedRefreshToken) {
                // In a real app, you'd verify the access token or try to refresh it
                // For simplicity, we'll assume it's valid if present for now
                // A more robust solution would involve verifying access token validity
                // and using the refresh token if the access token is expired.
                try {
                    // Attempt to refresh the token to ensure it's valid and get new access token
                    const data = await refreshToken(storedRefreshToken);
                    localStorage.setItem('accessToken', data.access);
                    // Optionally, update refresh token if it rotates
                    if (data.refresh) {
                        localStorage.setItem('refreshToken', data.refresh);
                    }
                    // For a real user object, you'd decode the JWT or fetch user details
                    setUser({ username: 'Authenticated User' }); // Placeholder user
                    setIsAuthenticated(true);
                } catch (error) {
                    console.error("Failed to refresh token:", error);
                    logout(); // Log out if refresh fails
                }
            }
            setLoading(false);
        };

        loadUser();
    }, []);

    // Login function
    const login = async (username, password) => {
        try {
            const data = await loginUser(username, password);
            localStorage.setItem('accessToken', data.access);
            localStorage.setItem('refreshToken', data.refresh);
            // For a real user object, you'd decode the JWT or fetch user details
            setUser({ username: username }); // Set a simple user object
            setIsAuthenticated(true);
            showSnackbar("Login successful!", "success");
            return true; // Indicate success
        } catch (error) {
            console.error("Login failed:", error);
            showSnackbar(`Login failed: ${error.message || "Invalid credentials."}`, "error");
            return false; // Indicate failure
        }
    };

    // Register function
    const register = async (username, email, password) => {
        try {
            const data = await registerUser(username, email, password);
            showSnackbar("Registration successful! Please log in.", "success");
            return true; // Indicate success
        } catch (error) {
            console.error("Registration failed:", error);
            showSnackbar(`Registration failed: ${error.message || "Please check your input."}`, "error");
            return false; // Indicate failure
        }
    };

    // Logout function
    const logout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        setUser(null);
        setIsAuthenticated(false);
        showSnackbar("You have been logged out.", "info");
    };

    // Memoize the context value to prevent unnecessary re-renders
    const authContextValue = React.useMemo(() => ({
        user,
        isAuthenticated,
        loading,
        login,
        register,
        logout,
    }), [user, isAuthenticated, loading]);

    // Render the provider with children
    return (
        <AuthContext.Provider value={authContextValue}>
            {!loading && children} {/* Only render children once loading is complete */}
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={5000}
                onClose={handleSnackbarClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </AuthContext.Provider>
    );
};