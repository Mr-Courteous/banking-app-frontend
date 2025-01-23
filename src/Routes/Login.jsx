import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // For navigation after login
import Header from '../Components/Header';
import baseUrl from './config';
import toast, { Toaster } from 'react-hot-toast';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post(`${baseUrl}/login`, {
        email,
        password,
      });

      console.log('Login successful:', response.data);
      toast.success("Good login")

      if (response.data.token) {
        const token = response.data.token;
        localStorage.setItem('authToken', token);
        // toast.success(response.data)
        toast.success("Good login")

        navigate('/dashboard'); // Redirect to dashboard after successful login
        setErrorMessage(''); // Clear any previous error messages
      } else {
        setErrorMessage(response.data.message || 'An error occurred. Please try again.');
        toast.error(response?.data.message)

      }
    } catch (error) {
      console.error('Error logging in:', error.response?.data?.message);
      toast.error(error.response?.data.message)
      setErrorMessage(error.response?.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && ( // Render loading component only when isLoading is true
        <div className="loading-state">
          <div className="loading"></div>
        </div>
      )}
      <Header />

      <div className="container">
        <div className="form-wrapper">
          <h2 className="form-title">Login</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-input"
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form-input"
            />

            <button type="submit">Login</button>
          </form>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </div>
      </div>
      
      <Toaster position='top-center' />

    </>
  );
};

export default Login;