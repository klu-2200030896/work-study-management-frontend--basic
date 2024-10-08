// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import AdminLogin from './pages/AdminLogin';
import StudentLogin from './pages/StudentLogin';
import AdminDashboard from './components/AdminDashboard';
import StudentDashboard from './components/StudentDashboard';
import Signup from './pages/Signup';
import AddJob from './pages/AddJob';
import AddMaterial from './pages/AddMaterial';
import { AppProvider } from './context/AppContext';

const App = () => {
  return (
    <AppProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/student-login" element={<StudentLogin />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/add-job" element={<AddJob />} />
          <Route path="/add-material" element={<AddMaterial />} />
        </Routes>
      </Router>
    </AppProvider>
  );
};

export default App;
