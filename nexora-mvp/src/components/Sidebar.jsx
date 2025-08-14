import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const menuItems = [
  { name: 'Dashboard', href: '/dashboard', icon: 'settings-icon' },
  { name: 'Profile', href: '/profile', icon: 'user-icon' },
  { name: 'Verification', href: '/verification', icon: 'verify-icon' },
  { name: 'API Docs', href: '/apidocs', icon: 'api-icon' },
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <aside className={`h-[calc(100vh-4rem)] sticky top-16 transition-all ${collapsed ? 'w-16' : 'w-64'} bg-black/60 dark:bg-black/60 light:bg-white/80 backdrop-blur border-r border-accent-gold`}>
      <div className="flex items-center justify-between px-3 py-2 border-b border-accent-gold">
        <span className={`text-sm font-semibold ${collapsed ? 'hidden' : 'block'}`}>Menu</span>
        <button
          className="p-1 rounded border border-accent-gold hover:bg-accent-hover"
          onClick={() => setCollapsed(!collapsed)}
          aria-label="Toggle sidebar"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="#FFD700"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </div>
      <nav className="py-3">
        {menuItems.map((item) => {
          const active = location.pathname === item.href;
          return (
            <Link
              key={item.name}
              to={item.href}
              className={`flex items-center gap-3 px-3 py-2 hover:bg-accent-hover/20 transition-gold ${active ? 'text-accent-gold' : 'text-text-secondary-dark dark:text-text-secondary-dark light:text-text-secondary-light'}`}
            >
              <img src={`/icons/${item.icon}.svg`} alt="" className="h-5 w-5" />
              <span className={`${collapsed ? 'hidden' : 'inline'} text-sm font-medium`}>{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
