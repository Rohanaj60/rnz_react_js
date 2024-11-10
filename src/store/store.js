import { configureStore } from '@reduxjs/toolkit';
import rentalReducer from '../features/rentals/rentalSlice';
import authReducer from '../features/auth/authSlice';

const store = configureStore({
  reducer: {
    rentals: rentalReducer,
    auth: authReducer,
  },
});

export default store;
