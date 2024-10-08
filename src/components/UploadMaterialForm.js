import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext'; // Ensure the path is correct
import { Typography, Button, TextField } from '@mui/material';

const UploadMaterialForm = () => {
    const { materials, setMaterials } = useAppContext();
    const [topic, setTopic] = useState('');
    const [file, setFile] = useState(null);
    const [error, setError] = useState('');

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        const fileTypes = ['application/pdf', 'video/mp4']; // Allowed file types

        if (selectedFile) {
            if (!fileTypes.includes(selectedFile.type)) {
                setError('Unsupported file type. Please upload a PDF or MP4 file.');
                setFile(null); // Reset file
            } else {
                setError(''); // Clear error if file type is valid
                setFile(selectedFile);
            }
        }
    };

    const handleUpload = () => {
        // Log the current state to debug
        console.log('Current topic:', topic);
        console.log('Selected file:', file);

        // Validate inputs
        if (!topic.trim()) {
            alert('Please provide a topic name.'); // Check for empty topic
            return;
        }

        if (!file) {
            alert('Please select a file to upload.'); // Check for file selection
            return;
        }

        // Create a new material object
        const newMaterial = {
            id: materials.length + 1, // Generate a new ID based on existing materials
            title: topic,
            type: file.type,
            url: URL.createObjectURL(file), // Create a local URL for the uploaded file
        };

        // Update materials in context
        setMaterials((prevMaterials) => [...prevMaterials, newMaterial]);

        // Reset state
        setTopic('');
        setFile(null);
    };

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', maxWidth: '400px' }}>
            <Typography variant="h6" gutterBottom>
                Upload Study Material
            </Typography>
            {error && <Typography color="error">{error}</Typography>}
            <TextField
                label="Topic Name"
                value={topic}
                onChange={(e) => {
                    setTopic(e.target.value);
                    setError(''); // Clear error when topic changes
                }}
                fullWidth
                margin="normal"
                variant="outlined" // Optional: Add outlined variant for styling
            />
            <input type="file" onChange={handleFileChange} style={{ marginBottom: '10px' }} />
            <Button variant="contained" color="primary" onClick={handleUpload}>
                Upload
            </Button>
        </div>
    );
};

export default UploadMaterialForm;
