import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const history = useHistory();
  const [userType, setUserType] = useState('');

  const handleUserTypeSelect = (type) => {
    setUserType(type);
    // Navigate to the specific login page based on user type
    if (type === 'student') {
      history.push('/student-login');
    } else if (type === 'admin') {
      history.push('/admin-login');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Login</h2>
      <div style={styles.buttonContainer}>
        <button 
          style={styles.button} 
          onClick={() => handleUserTypeSelect('student')}
        >
          Student Login
        </button>
        <button 
          style={styles.button} 
          onClick={() => handleUserTypeSelect('admin')}
        >
          Admin Login
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Full height to center vertically
    backgroundColor: '#f9f9f9', // Optional background color
  },
  title: {
    fontSize: '3rem', // Large font size for title
    marginBottom: '2rem',
    textAlign: 'center',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem', // Space between buttons
  },
  button: {
    padding: '1rem 2rem',
    fontSize: '1.5rem', // Bigger font size for buttons
    cursor: 'pointer',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#007bff', // Bootstrap primary color
    color: '#fff',
    transition: 'background-color 0.3s',
  },
};

export default Login;
