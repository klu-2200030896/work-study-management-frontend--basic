// src/pages/AdminActions.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Typography } from '@mui/material';

const AdminActions = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Admin Actions
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate('/add-job')}
        style={{ marginBottom: '10px', marginRight: '10px' }}
      >
        Add Job
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => navigate('/add-material')}
      >
        Add Material
      </Button>
    </div>
  );
};

export default AdminActions;
