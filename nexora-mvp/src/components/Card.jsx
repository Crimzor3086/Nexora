import React from 'react';

const Card = ({ title, actions, children, className = '' }) => {
  return (
    <div className={`rounded-xl border border-accent-gold/40 bg-black/40 dark:bg-black/40 light:bg-white/60 backdrop-blur p-4 shadow-gold hover:shadow-lg transition-gold ${className}`}>
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
