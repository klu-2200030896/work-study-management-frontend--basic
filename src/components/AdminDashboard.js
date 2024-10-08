// src/components/AdminDashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <Button variant="contained" color="primary" onClick={() => navigate('/add-job')}>
        Add Job
      </Button>
      <Button variant="contained" color="secondary" onClick={() => navigate('/add-material')}>
        Add Study Material
      </Button>
    </div>
  );
};

export default AdminDashboard;
