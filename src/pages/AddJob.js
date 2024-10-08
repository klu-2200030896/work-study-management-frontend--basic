// src/pages/AddJob.js
import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { Button, TextField } from '@mui/material';

const AddJob = () => {
  const { jobs, setJobs } = useAppContext();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');

  const handleAddJob = () => {
    const newJob = {
      id: jobs.length + 1,
      title,
      description,
      location,
    };
    setJobs([...jobs, newJob]);
  };

  return (
    <div>
      <h2>Add Job</h2>
      <TextField
        label="Job Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
      />
      <TextField
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        fullWidth
        multiline
      />
      <TextField
        label="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        fullWidth
      />
      <Button variant="contained" color="primary" onClick={handleAddJob}>
        Add Job
      </Button>
    </div>
  );
};

export default AddJob;
