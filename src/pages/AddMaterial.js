// src/pages/AddMaterial.js
import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { Button, TextField } from '@mui/material';

const AddMaterial = () => {
  const { materials, setMaterials } = useAppContext();
  const [title, setTitle] = useState('');
  const [type, setType] = useState('');
  const [url, setUrl] = useState('');

  const handleAddMaterial = () => {
    const newMaterial = {
      id: materials.length + 1,
      title,
      type,
      url,
    };
    setMaterials([...materials, newMaterial]);
  };

  return (
    <div>
      <h2>Add Study Material</h2>
      <TextField
        label="Material Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
      />
      <TextField
        label="Material Type (e.g., video/mp4 or application/pdf)"
        value={type}
        onChange={(e) => setType(e.target.value)}
        fullWidth
      />
      <TextField
        label="File URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        fullWidth
      />
      <Button variant="contained" color="primary" onClick={handleAddMaterial}>
        Add Material
      </Button>
    </div>
  );
};

export default AddMaterial;
