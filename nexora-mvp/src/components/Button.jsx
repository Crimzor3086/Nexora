import React from 'react';

const variantToClasses = {
  primary: 'bg-accent-gold text-black hover:bg-accent-hover',
  secondary: 'bg-transparent text-accent-gold border border-accent-gold hover:bg-accent-hover/10',
  danger: 'bg-error text-white hover:opacity-90',
};

const Button = ({ variant = 'primary', className = '', children, ...props }) => {
  const classes = variantToClasses[variant] || variantToClasses.primary;
  return (
    <button
      className={`px-4 py-2 rounded-md font-semibold shadow-gold hover-glow-gold smooth-transition ${classes} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
