import React from 'react';
import { Button, TextField, Typography, Box, Paper } from '@mui/material';

const SignUp = () => {
  const handleSignUp = (event) => {
    event.preventDefault();
    // Add sign-up logic here
  };

  return (
    <Box component={Paper} sx={{ padding: 3, margin: 'auto', maxWidth: 400 }}>
      <Typography variant="h5" component="h1" gutterBottom>
        Sign Up
      </Typography>
      <form onSubmit={handleSignUp}>
        <TextField
          fullWidth
          label="Name"
          variant="outlined"
          required
          margin="normal"
        />
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          required
          margin="normal"
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          variant="outlined"
          required
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Sign Up
        </Button>
      </form>
    </Box>
  );
};

export default SignUp;
