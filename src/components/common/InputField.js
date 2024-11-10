// import React from 'react';

// const InputField = ({ type, name, placeholder, value, onChange }) => {
//   return (
//     <input
//       type={type}
//       name={name}
//       placeholder={placeholder}
//       value={value}
//       onChange={onChange}
//       className="border border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 w-full p-2 mb-4"
//       required
//     />
//   );
// };

// export default InputField;


// import React from 'react';
// import Label from './Label';

// const InputField = ({ type, name, placeholder, onChange, value, required, label }) => {
//   return (
//     <div className="mb-4">
//       {label && <Label htmlFor={name}>{label}</Label>}
//       <input
//         type={type}
//         name={name}
//         placeholder={placeholder}
//         onChange={onChange}
//         value={value}
//         required={required}
//         id={name}
//         className="border border-gray-300 rounded-md p-2 w-full"
//       />
//     </div>
//   );
// };

// export default InputField;
import React from 'react';
import Label from './Label';

const InputField = ({ type, name, placeholder, onChange, value, required, label }) => {
  return (
    <div className="mb-6">
      {label && <Label htmlFor={name} className="mb-2 block text-gray-700">{label}</Label>}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        required={required}
        id={name}
        // className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2" 
        // className="w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-400 focus:ring-2 focus:ring-indigo-300 focus:ring-opacity-50 p-2 transition duration-200 ease-in-out"
      //  className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
       
       className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-500 hover:border-slate-300 shadow-sm focus:shadow"

        // className="border border-gray-300 rounded-md p-3 w-full transition duration-300 ease-in-out focus:outline-none focus:border-green-600 focus:ring focus:ring-green-200"
      />
    </div>
  );
};

export default InputField;
