import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext'; // Import the context

const StudentLogin = () => {
  const navigate = useNavigate();
  const { setStudentName } = useAppContext(); // Get setStudentName from context
  const [name, setName] = useState(''); // State to hold the entered name

  const handleLogin = (event) => {
    event.preventDefault();
    setStudentName(name); // Set the student's name in context
    navigate('/student-dashboard'); // Navigate to student dashboard
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
      <Typography variant="h4" mb={2}>Student Login</Typography>
      <form onSubmit={handleLogin} style={{ width: '100%' }}>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          required
          onChange={(e) => setName(e.target.value)} // Update name state on input
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          margin="normal"
          type="password"
          required
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Login
        </Button>
      </form>
    </Box>
  );
};

export default StudentLogin;
