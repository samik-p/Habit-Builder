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

// Define the RegisterForm functional component, now accepting a toggleForm prop
const RegisterForm = ({ toggleForm }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const { register, showSnackbar } = useAuth();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            showSnackbar("The passwords you entered do not match.", "error");
            return;
        }

        if (!username || !email || !password) {
            showSnackbar("Please fill in all required fields.", "error");
            return;
        }

        setIsLoading(true);

        try {
            const success = await register(username, email, password);
            if (success) {
                setUsername('');
                setEmail('');
                setPassword('');
                setConfirmPassword('');
                // After successful registration, automatically switch to login form
                toggleForm();
            }
        } catch (error) {
            console.error('Error during registration:', error);
            showSnackbar("An unexpected error occurred during registration.", "error");
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
                Register
            </Typography>
            <form onSubmit={handleSubmit}>
                <Stack spacing={2}>
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

                    <FormControl id="confirm-password" fullWidth variant="outlined" required>
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
                        variant="contained"
                        color="primary"
                        fullWidth
                        disabled={isLoading}
                    >
                        {isLoading ? 'Registering...' : 'Register'}
                    </Button>
                </Stack>
            </form>
            <Typography variant="body2" align="center" mt={2}>
                Already have an account?{' '}
                <Link
                    component="button" // Render as a button for accessibility
                    onClick={toggleForm} // Call the toggleForm function on click
                    sx={{ color: 'blue', cursor: 'pointer' }} // Add cursor pointer for visual feedback
                >
                    Login here
                </Link>
            </Typography>
        </Box>
    );
};

export default RegisterForm;
