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
} from '@mui/material';
import { useAuth } from '../context/AuthContext';

// Define the LoginForm functional component, now accepting a toggleForm prop
const LoginForm = ({ toggleForm }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const { login, showSnackbar } = useAuth();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!username || !password) {
            showSnackbar("Please enter both username and password.", "error");
            return;
        }

        setIsLoading(true);

        try {
            const success = await login(username, password);
            if (success) {
                setUsername('');
                setPassword('');
            }
        } catch (error) {
            console.error('Error during login:', error);
            showSnackbar("An unexpected error occurred during login.", "error");
        } finally {
            setIsLoading(false);
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
                Don't have an account?{' '}
                <Link
                    component="button" // Render as a button for accessibility
                    onClick={toggleForm} // Call the toggleForm function on click
                    sx={{ color: 'blue', cursor: 'pointer' }} // Add cursor pointer for visual feedback
                >
                    Register here
                </Link>
            </Typography>
        </Box>
    );
};

export default LoginForm;
