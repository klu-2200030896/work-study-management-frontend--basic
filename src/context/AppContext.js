// src/context/AppContext.js
import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [studentName, setStudentName] = useState('');
  const [jobs, setJobs] = useState([]);
  const [materials, setMaterials] = useState([]);

  return (
    <AppContext.Provider value={{ studentName, setStudentName, jobs, setJobs, materials, setMaterials }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
