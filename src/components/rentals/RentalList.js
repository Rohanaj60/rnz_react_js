import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRentalsStart, fetchRentalsSuccess } from '../../features/rentals/rentalSlice';
import { fetchRentals } from '../../services/RentalService';
import RentalCard from './RentalCard'; // Import the RentalCard component

const RentalList = () => {
  const dispatch = useDispatch();
  const rentals = useSelector((state) => state.rentals.list);
  const loading = useSelector((state) => state.rentals.loading);

  useEffect(() => {
    const getRentals = async () => {
      dispatch(fetchRentalsStart());
      try {
        const data = await fetchRentals();
        dispatch(fetchRentalsSuccess(data));
      } catch (error) {
        console.error(error);
      }
    };

    getRentals();
  }, [dispatch]);

  if (loading) return <div className="text-center text-lg">Loading...</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {rentals.map((rental) => (
        <RentalCard key={rental.id} rental={rental} />
      ))}
    </div>
  );
};

export default RentalList;
