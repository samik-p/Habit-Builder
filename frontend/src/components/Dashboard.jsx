import React from 'react';
import { Box, Typography, Button, AppBar, Toolbar } from '@mui/material';
import { useAuth } from '../context/AuthContext'; // Import useAuth hook

const Dashboard = () => {
    const { user, logout } = useAuth(); // Get user and logout function from context

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Typography variant="h6" component="div">
                        Habit-Builder
                    </Typography>
                    <Box>
                        <Typography variant="subtitle1" component="span" sx={{ mr: 2 }}>
                            Welcome, {user ? user.username : 'Guest'}!
                        </Typography>
                        <Button color="inherit" onClick={logout}>
                            Logout
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box sx={{ p: 3, textAlign: 'center' }}>
                <Typography variant="h5" mb={3}>
                    Your Habit Dashboard
                </Typography>
                <Typography variant="body1">
                    This is where your habits and progress will be displayed.
                </Typography>
                {/* Future habit list and tracking components will go here */}
            </Box>
        </Box>
    );
};

export default Dashboard;