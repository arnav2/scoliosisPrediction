import React from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar/NavigationBar';
import {Box, Stack } from '@mui/material';
import PatientBody from './components/PatientBody/PatientBody';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ background: theme.palette.background.default, minHeight: '100vh' }}>
        <Stack>
          <NavigationBar />
          <PatientBody />
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;