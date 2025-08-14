import React from 'react';

const Icon = ({ name, className = '', alt = '' }) => {
  return <img src={`/icons/${name}.svg`} alt={alt || name} className={className} />;
};

export default Icon;
