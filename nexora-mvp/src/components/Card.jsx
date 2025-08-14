import React from 'react';

const Card = ({ title, actions, children, className = '' }) => {
  return (
    <div className={`rounded-xl border border-accent-gold/40 bg-surface-dark backdrop-blur p-4 shadow-gold hover-glow-gold smooth-transition ${className}`}>
      {(title || actions) && (
        <div className="flex items-center justify-between mb-3">
          {title && <h3 className="text-lg font-semibold text-accent-gold">{title}</h3>}
          {actions}
        </div>
      )}
      <div>{children}</div>
    </div>
  );
};

export default Card;
