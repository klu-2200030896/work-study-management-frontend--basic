import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Work Study Program
        </Typography>
        <Button color="inherit" component={Link} to="/student-login">Student Login</Button>
        <Button color="inherit" component={Link} to="/admin-login">Admin Login</Button>
        <Button color="inherit" component={Link} to="/signup">Sign Up</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
