// src/components/MaterialList.js

import React from 'react';
import { Typography, Button } from '@mui/material';
import { useAppContext } from '../context/AppContext';

const MaterialList = () => {
    const { materials } = useAppContext();

    return (
        <div>
            <Typography variant="h5" gutterBottom>
                Study Materials
            </Typography>
            {materials && materials.length > 0 ? (
                materials.map((material) => (
                    <div key={material.id} style={{ marginBottom: '20px' }}>
                        <Typography variant="h6">{material.title}</Typography>
                        {material.type === 'application/pdf' ? (
                            <Button
                                variant="contained"
                                color="primary"
                                href={material.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Download PDF: {material.title}
                            </Button>
                        ) : material.type.startsWith('video/') ? (
                            <div>
                                <video width="600" controls>
                                    <source src={material.url} type={material.type} />
                                    Your browser does not support the video tag.
                                </video>
                                <div>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        href={material.url}
                                        download
                                    >
                                        Download Video
                                    </Button>
                                </div>
                            </div>
                        ) : (
                            <Typography variant="body2">Unsupported file type: {material.type || "No type provided"}</Typography>
                        )}
                    </div>
                ))
            ) : (
                <Typography variant="body1">
                    No study materials available at this time.
                </Typography>
            )}
        </div>
    );
};

export default MaterialList;
