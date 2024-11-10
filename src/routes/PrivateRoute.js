import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children, allowedRoles }) => {
  const { user } = useSelector((state) => state.auth); // Fetch authenticated user from Redux state

  if (!user) {
    // If not logged in, redirect to login
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(user.role)) {
    // If role is not authorized, redirect to unauthorized page or homepage
    return <Navigate to="/unauthorized" replace />;
  }

  // Render the protected component if user is authenticated and has the correct role
  return children;
};

export default PrivateRoute;
