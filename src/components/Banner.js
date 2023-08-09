import React from 'react';
import { Paper, Typography } from '@mui/material';

function Banner() {
  return (
    <Paper elevation={3} style={{ padding: '1rem', marginBottom: '2rem' }}>
      <Typography variant="h5" gutterBottom>
        Welcome to The Passion Projects!
      </Typography>
      <Typography variant="body1">
      Welcome to a community of Developers looking to lend a hand in helping one another realize what they're passionate about creating.
      </Typography>
    </Paper>
  );
}

export default Banner;
