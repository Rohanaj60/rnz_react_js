// import axios from 'axios';

// const API_URL = process.env.API_BASE_URL; // Replace with your API URL

// export const login = async (credentials) => {
//   const response = await axios.post(`${API_URL}/auth/login`, credentials);
//   return response.data;
// };

// export const register = async (userData) => {
//   const response = await axios.post(`${API_URL}/auth/register`, userData);
//   return response.data;
// };

import authApi from '../api/endpoints/authApi';
import { storeToken, getToken } from '../utils/tokenStorage'; // Utility for token management

const authService = {
  login: async (credentials) => {
    try {
      console.log({authservicecredentials: credentials});
      // return;

      // credentials.deviceId = '123'
      // credentials.deviceToken = 'test'

      const response = await authApi.login(credentials);
      const result = response.data
      console.log({result})
      // return;
      if (result.success) {
         
        const { token, user } = result.data;

        // Business logic: Store token and manage user state
        storeToken(token);
        return { success: true, user };
      } else {
        console.log({ success: false, message: result.message })
        // Handle when success is "false"
        return { success: false, message: result.message };
      }
    
    } catch (error) {
      console.log(
       ' its error',error.response?.data?.message 
      )
      return { success: false, message: error.response?.data?.message };
    }
  },


  register: async (userData) => {
    try {
      const response = await authApi.register(userData);
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, message: error.response?.data?.message };
    }
  },

  logout: () => {
    localStorage.removeItem('authToken');
    return { success: true };
  },

  isAuthenticated: () => {
    const token = getToken();
    return !!token;
  },
};

export default authService;
