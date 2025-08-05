import React, { useState } from 'react';
import {
    Box,
    Button,
    FormControl,
    InputLabel,
    OutlinedInput,
    Typography,
    Stack,
    Link,
    Snackbar,
    Alert
} from '@mui/material';

// Define the LoginForm functional component
const LoginForm = () => {
    // State variables to hold the input values
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false); // To manage loading state for the button

    // State for Snackbar (MUI's toast equivalent)
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('info'); // 'success', 'error', 'warning', 'info'

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

    // Event handler for form submission
    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default browser form submission

        // Basic client-side validation
        if (!username || !password) {
            showSnackbar("Please enter both username and password.", "error");
            return;
        }

        setIsLoading(true); // Set loading state to true

        // Log the captured data (for now, we'll connect to the backend later)
        console.log('Login Data:', { username, password });

        // Simulate an API call (replace with actual fetch to backend later)
        try {
            // In a real scenario, you'd make a fetch/axios call here:
            // const response = await fetch('http://127.0.0.1:8000/api/token/', { // This is the JWT token endpoint
            //   method: 'POST',
            //   headers: {
            //     'Content-Type': 'application/json',
            //   },
            //   body: JSON.stringify({ username, password }),
            // });
            // const data = await response.json();

            // if (response.ok) {
            //   // Store the token (e.g., in localStorage) and update global user state
            //   // localStorage.setItem('accessToken', data.access);
            //   // localStorage.setItem('refreshToken', data.refresh);
            //   showSnackbar("Login Successful!", "success");
            //   // Optionally redirect user to dashboard
            //   setUsername('');
            //   setPassword('');
            // } else {
            //   // Handle errors from the backend (e.g., invalid credentials)
            //   const errorMessages = data.detail || Object.values(data).flat().join(' ');
            //   showSnackbar(errorMessages || "Login failed. Please check your credentials.", "error");
            // }

            // For now, just simulate success after a delay
            await new Promise(resolve => setTimeout(resolve, 1500));
            showSnackbar("Form Captured! Check console for captured data. Backend integration next!", "info");
            setUsername('');
            setPassword('');

        } catch (error) {
            console.error('Error during login simulation:', error);
            showSnackbar("An error occurred. Unable to process login at this time.", "error");
        } finally {
            setIsLoading(false); // Reset loading state
        }
    };

    return (
        <Box
            sx={{
                p: 4,
                maxWidth: '500px',
                border: '1px solid',
                borderColor: 'grey.300',
                borderRadius: '8px',
                boxShadow: 3,
                margin: '20px auto',
            }}
        >
            <Typography variant="h4" component="h1" align="center" mb={3}>
                Login
            </Typography>
            <form onSubmit={handleSubmit}>
                <Stack spacing={2}>
                    <FormControl fullWidth variant="outlined" required>
                        <InputLabel htmlFor="login-username">Username</InputLabel>
                        <OutlinedInput
                            id="login-username"
                            type="text"
                            label="Username"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </FormControl>

                    <FormControl fullWidth variant="outlined" required>
                        <InputLabel htmlFor="login-password">Password</InputLabel>
                        <OutlinedInput
                            id="login-password"
                            type="password"
                            label="Password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </FormControl>

                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        disabled={isLoading}
                    >
                        {isLoading ? 'Logging In...' : 'Login'}
                    </Button>
                </Stack>
            </form>
            <Typography variant="body2" align="center" mt={2}>
                Don't have an account? <Link href="/register" sx={{ color: 'blue' }}>Register here</Link>
            </Typography>

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
        </Box>
    );
};

export default LoginForm;
