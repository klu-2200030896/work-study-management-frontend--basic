import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import { useAppContext } from '../context/AppContext';

const JobPostingForm = () => {
  const { setJobs } = useAppContext();
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [jobLocation, setJobLocation] = useState('');

  const handleAddJob = () => {
    if (jobTitle && jobDescription && jobLocation) {
      const newJob = {
        id: Date.now(), // Unique ID based on timestamp
        title: jobTitle,
        description: jobDescription,
        location: jobLocation,
      };
      setJobs((prevJobs) => [...prevJobs, newJob]); // Add new job to the list
      setJobTitle('');
      setJobDescription('');
      setJobLocation('');
    }
  };

  return (
    <div>
      <Typography variant="h6">Post a New Job</Typography>
      <TextField
        label="Job Title"
        variant="outlined"
        value={jobTitle}
        onChange={(e) => setJobTitle(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Job Description"
        variant="outlined"
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Location"
        variant="outlined"
        value={jobLocation}
        onChange={(e) => setJobLocation(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleAddJob}>
        Add Job
      </Button>
    </div>
  );
};

export default JobPostingForm;
