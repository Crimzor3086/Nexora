import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../App';
import { useAuth } from '../utils/auth';
import Input from './Input';
import Tooltip from './Tooltip';
import Notifications from './Notifications';
import ProfileMenu from './ProfileMenu';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Profile', href: '/profile' },
  { name: 'API Docs', href: '/apidocs' },
];

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { isAuthenticated, logout, user } = useAuth();
  const navigate = useNavigate();

  const onLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 dark:bg-black/70 light:bg-white/80 backdrop-blur border-b border-accent-gold flex items-center justify-between gap-4 px-6 h-16 shadow-gold">
      <div className="flex items-center gap-3 min-w-[160px]">
        <img
          src={theme === 'dark' ? '/icons/logo-dark.svg' : '/icons/logo-light.svg'}
          alt="Nexora Logo"
          className="h-8 w-auto"
        />
        <span className="font-bold text-lg gold-gradient hidden sm:block">Nexora</span>
      </div>
      <div className="hidden md:flex items-center gap-6">
        {navLinks.map((link) => (
          <Tooltip key={link.name} content={link.name}>
            <Link
              to={link.href}
              className="text-text-secondary-dark dark:text-text-secondary-dark light:text-text-secondary-light hover:text-accent-gold transition-gold font-medium"
            >
              {link.name}
            </Link>
          </Tooltip>
        ))}
      </div>
      <div className="flex items-center gap-3 flex-1 max-w-lg">
        <Input placeholder="Search..." />
      </div>
      <div className="flex items-center gap-3">
        <Notifications />
        {isAuthenticated ? (
          <>
            <ProfileMenu name={user?.name} />
            <button onClick={onLogout} className="text-accent-gold font-medium border border-accent-gold px-3 py-1 rounded transition-gold hover:bg-accent-hover/10">Logout</button>
          </>
        ) : (
          <Link to="/login" className="text-accent-gold font-medium border border-accent-gold px-3 py-1 rounded transition-gold hover:bg-accent-hover/10">Login</Link>
        )}
        <button
          onClick={toggleTheme}
          className="ml-1 p-2 rounded-full border border-accent-gold hover:bg-accent-hover transition-gold"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#FFD700"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.07l-.71.71M21 12h-1M4 12H3m16.95 7.07l-.71-.71M4.05 4.93l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#FFD700"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" /></svg>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
