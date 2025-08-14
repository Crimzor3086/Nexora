import React from 'react';

const Input = ({ className = '', ...props }) => (
  <input
    className={`w-full rounded-md bg-surface-dark text-white placeholder-gray-500 border border-gray-800 focus:border-accent-gold focus:ring-2 focus:ring-accent-gold outline-none p-2 ${className}`}
    {...props}
  />
);

export default Input;
