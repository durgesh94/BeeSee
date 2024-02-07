import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

export const App: React.FC = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", alignSelf: "center" }}>
      <CircularProgress />
      <span style={{ marginLeft: 24 }}>Coming Soon!</span>
    </div>
  );
};