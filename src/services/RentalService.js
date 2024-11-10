
  // src/services/rentalsService.js

import rentalsApi from '../api/endpoints/rentalsApi';
export const fetchRentals = async () => {
  // Replace with actual API call
  return [
    {
      id: 1,
      name: 'Apartment A',
      description: 'A cozy apartment in the heart of the city.',
      price: 120,
      image: 'https://via.placeholder.com/300?text=Apartment+A',
    },
    {
      id: 2,
      name: 'Apartment B',
      description: 'Spacious and modern with a great view.',
      price: 150,
      image: 'https://via.placeholder.com/300?text=Apartment+B',
    },
    {
      id: 3,
      name: 'Apartment C',
      description: 'Charming studio close to public transport.',
      price: 90,
      image: 'https://via.placeholder.com/300?text=Apartment+C',
    },
    {
      id: 4,
      name: 'Apartment D',
      description: 'Luxurious penthouse with a rooftop terrace.',
      price: 250,
      image: 'https://via.placeholder.com/300?text=Apartment+D',
    },
    {
      id: 5,
      name: 'Apartment E',
      description: 'Stylish loft in a vibrant neighborhood.',
      price: 180,
      image: 'https://via.placeholder.com/300?text=Apartment+E',
    },
    {
      id: 6,
      name: 'Apartment F',
      description: 'Quiet retreat with beautiful garden views.',
      price: 110,
      image: 'https://via.placeholder.com/300?text=Apartment+F',
    },
    {
      id: 7,
      name: 'Apartment G',
      description: 'Modern flat with easy access to downtown.',
      price: 130,
      image: 'https://via.placeholder.com/300?text=Apartment+G',
    },
    {
      id: 8,
      name: 'Apartment H',
      description: 'Chic space with a full kitchen and amenities.',
      price: 140,
      image: 'https://via.placeholder.com/300?text=Apartment+H',
    },
    {
      id: 9,
      name: 'Apartment I',
      description: 'Comfortable stay with nearby shopping.',
      price: 95,
      image: 'https://via.placeholder.com/300?text=Apartment+I',
    },
    {
      id: 10,
      name: 'Apartment J',
      description: 'Bright and airy space, perfect for families.',
      price: 160,
      image: 'https://via.placeholder.com/300?text=Apartment+J',
    },
    {
      id: 11,
      name: 'Apartment K',
      description: 'Cute studio with vintage decor and charm.',
      price: 85,
      image: 'https://via.placeholder.com/300?text=Apartment+K',
    },
    {
      id: 12,
      name: 'Apartment L',
      description: 'Spacious apartment with home office setup.',
      price: 135,
      image: 'https://via.placeholder.com/300?text=Apartment+L',
    },
    {
      id: 13,
      name: 'Apartment M',
      description: 'Family-friendly home with play area.',
      price: 145,
      image: 'https://via.placeholder.com/300?text=Apartment+M',
    },
    {
      id: 14,
      name: 'Apartment N',
      description: 'Stylish duplex with modern finishes.',
      price: 210,
      image: 'https://via.placeholder.com/300?text=Apartment+N',
    },
    {
      id: 15,
      name: 'Apartment O',
      description: 'Charming cottage with rustic vibes.',
      price: 115,
      image: 'https://via.placeholder.com/300?text=Apartment+O',
    },
  ];
};
const rentalsService = {
  fetchAllRentals: async () => {
    try {
      const response = await rentalsApi.fetchRentals();
      return { success: true, rentals: response.data };
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || 'Failed to fetch rentals.';
      return { success: false, error: errorMessage };
    }
  },

  getRentalDetails: async (id) => {
    try {
      const response = await rentalsApi.getRentalById(id);
      return { success: true, rental: response.data };
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || 'Failed to fetch rental details.';
      return { success: false, error: errorMessage };
    }
  },

  createNewRental: async (rentalData) => {
    try {
      const response = await rentalsApi.createRental(rentalData);
      return { success: true, rental: response.data };
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || 'Failed to create rental.';
      return { success: false, error: errorMessage };
    }
  },

  updateRental: async (id, rentalData) => {
    try {
      const response = await rentalsApi.updateRental(id, rentalData);
      return { success: true, rental: response.data };
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || 'Failed to update rental.';
      return { success: false, error: errorMessage };
    }
  },

  deleteRental: async (id) => {
    try {
      await rentalsApi.deleteRental(id);
      return { success: true };
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || 'Failed to delete rental.';
      return { success: false, error: errorMessage };
    }
  },

  // Add more rentals-related business logic as needed
};

export default rentalsService;
