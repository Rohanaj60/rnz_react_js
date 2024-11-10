// src/features/auth/authThunks.js

import { createAsyncThunk } from '@reduxjs/toolkit';
import authService from '../../services/AuthService';

// Async thunk for logging in
export const loginUser = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      console.log({ thunk: credentials });

      // Call authService to login
      const result = await authService.login(credentials);
      console.log({thunkResult:result})
      // Handle success and return user data
      if (result.success) {

        console.log("thunk res32435ult",result.user)
        return result.user;
      } else {
        console.log("its fails naa", result)
        // If login fails, reject with the error message
        return thunkAPI.rejectWithValue(result.message || 'Login failed');
      }
    } catch (error) {
      console.log("its fails naa catch", error.message)
      // Catch unexpected errors and reject the thunk
      return thunkAPI.rejectWithValue(error.message || 'Login failed');
    }
  }
);

// Async thunk for registering
export const registerUser = createAsyncThunk(
  'auth/register',
  async (userData, thunkAPI) => {
    try {
      // Call authService to register
      const result = await authService.register(userData);
      // Handle success and return user data
      if (result.success) {
        return result.data;
      } else {


console.log({resgisterresult:result})

        // If registration fails, reject with the error message
        return thunkAPI.rejectWithValue(result.message );
      }
    } catch (error) {
      
      // Catch unexpected errors and reject the thunk
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
