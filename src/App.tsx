import React from 'react';
import { Routes } from './routes';
import { ThemeProvider } from '@mui/material/styles';
import theme from "./styles/customTheme";

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
};