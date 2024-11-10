import React from 'react';
import Button from '../common/Button';

const RentalCard = ({ rental }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 max-w-xs mx-auto mb-6">
      <img 
        src={ 'https://images.unsplash.com/photo-1618347191821-51285853505f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} 
        alt={rental.name} 
        className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-110" 
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-1">{rental.name}</h3>
        <p className="text-gray-600 mb-2">{rental.description}</p>
        <p className="text-green-600 font-bold text-lg mb-2">
          ₹ {rental.price} 
          <span className="text-gray-500 text-sm">/month</span>
        </p>
        <p className="text-gray-500 text-sm mb-2">{rental.size} | {rental.tenant}</p>
        <p className="text-gray-400 text-xs">Added on {rental.added}</p>
        <Button className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-md transition duration-300">
          View Details
        </Button>
      </div>
    </div>
  );
};

export default RentalCard;
