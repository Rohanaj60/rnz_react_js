// src/api/endpoints/rentalsApi.js

import axiosInstance from '../axiosInstance';

const rentalsApi = {
  fetchRentals: () => {
    return axiosInstance.get('/rentals');
  },
  getRentalById: (id) => {
    return axiosInstance.get(`/rentals/${id}`);
  },
  createRental: (rentalData) => {
    return axiosInstance.post('/rentals', rentalData);
  },
  updateRental: (id, rentalData) => {
    return axiosInstance.put(`/rentals/${id}`, rentalData);
  },
  deleteRental: (id) => {
    return axiosInstance.delete(`/rentals/${id}`);
  },
  // Add more rentals-related API calls as needed
};

export default rentalsApi;
