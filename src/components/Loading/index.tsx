// Loading.tsx
import { Box, CircularProgress } from '@mui/material';
import React from 'react';

const Loading: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <CircularProgress size={40} style={{ color: '#fff' }} />
    </Box>
  );
};

export default Loading;
