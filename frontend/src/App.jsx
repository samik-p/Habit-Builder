// frontend/src/App.jsx
import React from 'react';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard'; // We'll create this next
import { useAuth } from './context/AuthContext'; // Import useAuth hook
import { Box, CircularProgress, Typography } from '@mui/material'; // For loading indicator

import './App.css';

function App() {
  const { isAuthenticated, loading } = useAuth(); // Get auth state from context

  if (loading) {
    // Show a loading spinner while authentication state is being determined
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
        <Typography ml={2}>Loading authentication...</Typography>
      </Box>
    );
  }

  return (
    <div className="App">
      {/* Conditionally render components based on authentication status */}
      {isAuthenticated ? (
        <Dashboard /> // Show dashboard if logged in
      ) : (
        // Show login or register forms if not logged in
        // For simplicity, we'll just show LoginForm here.
        // In a real app, you'd use React Router to switch between them.
        <LoginForm />
        // Or <RegisterForm /> if you want to default to registration
      )}
    </div>
  );
}

export default App;