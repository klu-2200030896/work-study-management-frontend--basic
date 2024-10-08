import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Sample admin credentials (replace with real authentication logic)
  const ADMIN_EMAIL = 'admin@example.com';
  const ADMIN_PASSWORD = 'admin123';

  const handleLogin = (event) => {
    event.preventDefault();
    // Check if the email and password match the admin credentials
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      navigate('/admin-dashboard'); // Navigate to Admin Dashboard on successful login
    } else {
      alert('Invalid email or password!'); // Alert if login fails
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: 5,
        p: 2,
        border: '1px solid gray',
        borderRadius: '5px',
        maxWidth: '400px',
        mx: 'auto',
      }}
    >
      <Typography variant="h4" mb={2}>Admin Login</Typography>
      <form onSubmit={handleLogin} style={{ width: '100%' }}>
        <TextField 
          label="Email" 
          variant="outlined" 
          fullWidth 
          margin="normal" 
          required 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <TextField 
          label="Password" 
          variant="outlined" 
          fullWidth 
          margin="normal" 
          type="password" 
          required 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Login
        </Button>
      </form>
    </Box>
  );
};

export default AdminLogin;
