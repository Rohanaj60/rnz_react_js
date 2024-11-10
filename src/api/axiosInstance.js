// src/api/axiosInstance.js

import axios from 'axios';

// Create an Axios instance
const axiosInstance = axios.create({
  // baseURL: process.env.API_BASE_URL || 'http://127.0.0.1:4099/app/api', // Replace with your API base URL
  baseURL: process.env.API_BASE_URL || 'http://127.0.0.1:8000/api', // Replace with your API base URL

  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor (optional)
axiosInstance.interceptors.request.use(
  (config) => {
    // You can modify the config before the request is sent
    const token = localStorage.getItem('authToken'); // Example: Retrieve token from localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add a response interceptor (optional)
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle global errors
    if (error.response && error.response.status === 401) {
      // Example: Redirect to login if unauthorized
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
