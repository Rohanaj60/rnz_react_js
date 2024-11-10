import { createSlice } from '@reduxjs/toolkit';

const rentalSlice = createSlice({
  name: 'rentals',
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchRentalsStart(state) {
      state.loading = true;
    },
    fetchRentalsSuccess(state, action) {
      state.loading = false;
      state.list = action.payload;
    },
    fetchRentalsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchRentalsStart, fetchRentalsSuccess, fetchRentalsFailure } = rentalSlice.actions;
export default rentalSlice.reducer;
