import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const ProfileMenu = ({ name = 'User' }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onClick = (e) => { if (!ref.current?.contains(e.target)) setOpen(false); };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button onClick={() => setOpen((o) => !o)} className="flex items-center gap-2 p-1 rounded hover:bg-surface-dark">
        <img src="/icons/user-icon.svg" alt="User" className="h-6 w-6" />
        <span className="hidden sm:inline text-sm text-white/90">{name}</span>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-surface-dark border border-accent-gold rounded shadow-gold p-2 z-50">
          <Link to="/profile" className="block px-3 py-2 hover:bg-black/30 rounded">Profile</Link>
          <Link to="/settings" className="block px-3 py-2 hover:bg-black/30 rounded">Settings</Link>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
