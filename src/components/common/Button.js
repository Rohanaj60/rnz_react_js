// // src/components/Button.js
// import React from 'react';

// const Button = ({ children, onClick, type = 'button', className }) => {
//   return (
//     <button 
//       type={type} 
//       onClick={onClick} 
//       className={`w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition ${className}`}>
//       {children}
//     </button>
//   );
// };

// export default Button

import React from 'react';

const Button = ({ children, onClick, disabled, className }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="rounded-md bg-slate-700 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"

      // className={`w-full bg-slate-500 text-white py-2 px-2 rounded-md hover:bg-slate-600 transition duration-300 ease-in-out ${className}`}
      >
      {children}
    </button>
  );
};

export default Button;
