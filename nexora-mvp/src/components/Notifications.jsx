import React, { useState, useRef, useEffect } from 'react';

const Notifications = () => {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { id: 1, type: 'info', text: 'Welcome to Nexora!' },
    { id: 2, type: 'success', text: 'KYC approved.' },
  ]);
  const ref = useRef(null);

  useEffect(() => {
    const onClick = (e) => {
      if (!ref.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  const unread = items.length;

  return (
    <div className="relative" ref={ref}>
      <button onClick={() => setOpen((o) => !o)} className="relative p-2 rounded hover:bg-surface-dark" aria-label="Notifications">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2" className="h-5 w-5"><path d="M15 17h5l-1.4-1.4A2 2 0 0118 14.2V11a6 6 0 10-12 0v3.2c0 .5-.2 1-.6 1.4L4 17h5"/><path d="M9 17a3 3 0 006 0"/></svg>
        {unread > 0 && (
          <span className="absolute -top-1 -right-1 bg-accent-gold text-black text-[10px] font-bold rounded-full px-1.5 py-0.5">{unread}</span>
        )}
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-72 bg-surface-dark border border-accent-gold rounded shadow-gold p-2 z-50">
          <div className="text-sm font-semibold text-accent-gold mb-2">Notifications</div>
          <ul className="space-y-1">
            {items.map((n) => (
              <li key={n.id} className="text-sm text-white/90 bg-black/30 rounded p-2">
                {n.text}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Notifications;
