import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto p-6 flex justify-between items-center">
        <h1 className="text-4xl font-bold text-green-600 drop-shadow-lg">Rental App</h1>
        <nav className="flex space-x-8">
          <Link to="/login" className="text-green-600 hover:text-green-800 transition duration-300">Login</Link>
          <Link to="/register" className="text-green-600 hover:text-green-800 transition duration-300">Register</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
