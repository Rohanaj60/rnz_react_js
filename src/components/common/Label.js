import React from 'react';

const Label = ({ htmlFor, children }) => {
  return (
    <label 
      htmlFor={htmlFor} 
      className="block text-sm font-medium text-gray-800 mb-1 transition duration-300"
    >
      {children}
    </label>
  );
};

export default Label;
