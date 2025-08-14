import React from 'react';

const ProgressBar = ({ value = 0 }) => {
  const pct = Math.max(0, Math.min(100, value));
  return (
    <div className="w-full h-2 bg-surface-dark rounded-full overflow-hidden">
      <div className="h-full bg-accent-gold transition-all" style={{ width: `${pct}%` }} />
    </div>
  );
};

export default ProgressBar;
