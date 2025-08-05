import React, { useState } from 'react'; // Import useState
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import { useAuth } from './context/AuthContext';
import { Box, CircularProgress, Typography } from '@mui/material';

import './App.css';

function App() {
  const { isAuthenticated, loading } = useAuth();
  // New state to control which form is shown (true for Register, false for Login)
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  // Function to toggle between login and registration forms
  const toggleForm = () => {
    setShowRegisterForm(prev => !prev);
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
        <Typography ml={2}>Loading authentication...</Typography>
      </Box>
    );
  }

  return (
    <div className="App">
      {isAuthenticated ? (
        <Dashboard />
      ) : (
        showRegisterForm ? (
          <RegisterForm toggleForm={toggleForm} /> // Pass toggleForm to RegisterForm
        ) : (
          <LoginForm toggleForm={toggleForm} /> // Pass toggleForm to LoginForm
        )
      )}
    </div>
  );
}

export default App;
