import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

const JobList = ({ jobs }) => {
  return (
    <List>
      {jobs.map((job) => (
        <ListItem key={job.id}>
          <ListItemText primary={job.title} secondary={`${job.description} - ${job.location}`} />
        </ListItem>
      ))}
    </List>
  );
};

export default JobList;
