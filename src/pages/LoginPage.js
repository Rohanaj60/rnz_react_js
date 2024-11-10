import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { login } from '../features/auth/authSlice';
import { loginUser } from '../features/auth/authThunks';

import { Link } from 'react-router-dom';
import InputField from '../components/common/InputField';
import Button from '../components/common/Button';

const LoginPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);

  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(loginUser(credentials));
    dispatch(loginUser(credentials))
    .unwrap()
    .then((user) => {
      // Handle successful login, e.g., redirecting or updating the UI
      console.log('Login successful:', user);
      return;
    })
    .catch((error) => {
      // Log or handle the error here
      console.error('Login failed:', error);
      return;
    });

  };

  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-8 drop-shadow-md">Login</h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        
        <form onSubmit={handleSubmit}>
          <InputField 
            type="email" 
            name="email" 
            placeholder="Email" 
            onChange={handleChange} 
            value={credentials.email}
            required 
            label="Email" 
          />
          <InputField 
            type="password" 
            name="password" 
            placeholder="Password" 
            onChange={handleChange} 
            value={credentials.password}
            required 
            label="Password" 
          />
          <Button disabled={loading} className="w-full mt-6">
            {loading ? 'Logging in...' : 'Login'}
          </Button>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/register" className="text-blue-500 hover:underline">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
