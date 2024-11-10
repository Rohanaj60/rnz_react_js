import React from 'react';
import Label from './Label';

const SelectField = ({ label, name, value, onChange, options }) => {
  return (
    <div className="mb-6">
      {label && <Label htmlFor={name}>{label}</Label>}
      <div className="relative">
        <select
          name={name}
          value={value}
          onChange={onChange}
          id={name}
          // className="block w-full appearance-none bg-white text-gray-700 border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500 transition duration-300 ease-in-out"

          className="block w-full appearance-none bg-white text-gray-700  text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-500 hover:border-slate-300 shadow-sm focus:shadow"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
          <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SelectField;
