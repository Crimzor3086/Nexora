import React from 'react';

export const Tabs = ({ tabs = [], active, onChange }) => {
  return (
    <div className="border-b border-gray-800">
      <nav className="flex gap-6">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => onChange(t.key)}
            className={`py-2 -mb-px border-b-2 transition-colors ${
              active === t.key ? 'border-accent-gold text-accent-gold' : 'border-transparent text-text-secondary-dark hover:text-accent-gold'
            }`}
          >
            {t.label}
          </button>
        ))}
      </nav>
    </div>
  );
};
