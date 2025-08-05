import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Create a basic MUI theme
const theme = createTheme();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}> {/* Wrap the App with ThemeProvider */}
      <CssBaseline /> {/* Optional: Resets browser's default CSS */}
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);