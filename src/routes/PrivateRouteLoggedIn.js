import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRouteLoggedIn = ({ children }) => {
  const { user } = useSelector((state) => state.auth); // Get the user from Redux store
console.log({loggedinuser:user})
  if (!user) {
    // If not logged in, redirect to login page
    return <Navigate to="/login" replace />;
  }

  // Render the protected component if the user is logged in
  return children;
};

export default PrivateRouteLoggedIn;
