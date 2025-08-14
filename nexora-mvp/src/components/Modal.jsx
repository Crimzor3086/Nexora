import React from 'react';

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />
      <div className="relative z-10 w-full max-w-lg rounded-xl border border-accent-gold bg-black/90 p-4 text-white">
        {title && <h2 className="text-xl font-semibold text-accent-gold mb-3">{title}</h2>}
        <div>{children}</div>
        <div className="mt-4 flex justify-end">
          <button onClick={onClose} className="px-4 py-2 rounded border border-accent-gold hover:bg-accent-hover transition-gold">Close</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
