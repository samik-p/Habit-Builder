import React, { useState } from 'react';
import {
    Box,
    Button,
    FormControl,
    InputLabel, // MUI uses InputLabel for labels
    OutlinedInput, // A common MUI input variant
    Typography, // Replaces Heading and Text for consistent typography
    Stack, // Replaces VStack for vertical stacking
    Link, // For the "Login here" link
    Snackbar, // For displaying messages
    Alert // For displaying messages with status
} from '@mui/material';

// Define the RegisterForm functional component
const RegisterForm = () => {
    // State variables to hold the input values
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState(''); // For password confirmation
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
        if (password !== confirmPassword) {
            showSnackbar("The passwords you entered do not match.", "error");
            return; // Stop the submission
        }

        if (!username || !email || !password) {
            showSnackbar("Please fill in all required fields.", "error");
            return;
        }

        setIsLoading(true); // Set loading state to true

        // Log the captured data (for now, we'll connect to the backend later)
        console.log('Registration Data:', { username, email, password });

        // Simulate an API call (replace with actual fetch to backend later)
        try {
            // In a real scenario, you'd make a fetch/axios call here:
            // const response = await fetch('http://127.0.0.1:8000/api/users/register/', {
            //   method: 'POST',
            //   headers: {
            //     'Content-Type': 'application/json',
            //   },
            //   body: JSON.stringify({ username, email, password }),
            // });
            // const data = await response.json();

            // if (response.ok) {
            //   showSnackbar("Registration Successful! Your account has been created.", "success");
            //   // Optionally clear form or redirect user
            //   setUsername('');
            //   setEmail('');
            //   setPassword('');
            //   setConfirmPassword('');
            // } else {
            //   // Handle errors from the backend
            //   const errorMessages = Object.values(data).flat().join(' ');
            //   showSnackbar(errorMessages || "Something went wrong.", "error");
            // }

            // For now, just simulate success after a delay
            await new Promise(resolve => setTimeout(resolve, 1500));
            showSnackbar("Form Captured! Check console for captured data. Backend integration next!", "info");
            setUsername('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');

        } catch (error) {
            console.error('Error during registration simulation:', error);
            showSnackbar("Unable to process registration at this time.", "error");
        } finally {
            setIsLoading(false); // Reset loading state
        }
    };

    return (
        <Box
            sx={{
                p: 4, // Padding
                maxWidth: '500px',
                border: '1px solid',
                borderColor: 'grey.300', // Border color
                borderRadius: '8px',
                boxShadow: 3, // MUI shadow level
                margin: '20px auto',
            }}
        >
            <Typography variant="h4" component="h1" align="center" mb={3}>
                Register
            </Typography>
            <form onSubmit={handleSubmit}>
                <Stack spacing={2}> {/* MUI Stack for spacing */}
                    <FormControl fullWidth variant="outlined" required>
                        <InputLabel htmlFor="username">Username</InputLabel>
                        <OutlinedInput
                            id="username"
                            type="text"
                            label="Username"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </FormControl>

                    <FormControl fullWidth variant="outlined" required>
                        <InputLabel htmlFor="email">Email address</InputLabel>
                        <OutlinedInput
                            id="email"
                            type="email"
                            label="Email address"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </FormControl>

                    <FormControl fullWidth variant="outlined" required>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <OutlinedInput
                            id="password"
                            type="password"
                            label="Password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </FormControl>

                    <FormControl fullWidth variant="outlined" required>
                        <InputLabel htmlFor="confirm-password">Confirm Password</InputLabel>
                        <OutlinedInput
                            id="confirm-password"
                            type="password"
                            label="Confirm Password"
                            placeholder="Confirm your password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </FormControl>

                    <Button
                        type="submit"
                        variant="contained" // MUI button variant
                        color="primary" // MUI color palette
                        fullWidth // Equivalent to width="full"
                        disabled={isLoading} // Disable button when loading
                    >
                        {isLoading ? 'Registering...' : 'Register'}
                    </Button>
                </Stack>
            </form>
            <Typography variant="body2" align="center" mt={2}>
                Already have an account? <Link href="/login" sx={{ color: 'blue' }}>Login here</Link>
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

export default RegisterForm;
