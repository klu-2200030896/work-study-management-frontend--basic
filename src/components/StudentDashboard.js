import React from 'react';
import JobList from './JobList';
import MaterialList from './MaterialList';
import { useAppContext } from '../context/AppContext';
import { Typography } from '@mui/material';


const StudentDashboard = () => {
  const { jobs, studentName, materials } = useAppContext();

  return (
    <div>
      <Typography variant="h1" gutterBottom>
        Welcome, {studentName}!
      </Typography>
      <Typography variant="h5" gutterBottom>Available Jobs</Typography>

      {jobs && jobs.length > 0 ? (
        <JobList jobs={jobs} />
      ) : (
        <Typography variant="body1">No jobs available at this time.</Typography>
      )}
      
      <MaterialList materials={materials} />
    </div>
  );
};

export default StudentDashboard;
