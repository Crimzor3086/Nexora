import React, { useEffect, useRef } from 'react';

const Modal = ({ isOpen, onClose, title, children }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    const previous = document.activeElement;
    ref.current?.focus();
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      previous?.focus?.();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <button className="absolute inset-0 bg-black/70" onClick={onClose} aria-label="Close modal overlay" />
      <div ref={ref} tabIndex={-1} className="relative z-10 w-full max-w-lg rounded-xl border border-accent-gold bg-black/90 p-4 text-white">
        {title && <h2 id="modal-title" className="text-xl font-semibold text-accent-gold mb-3">{title}</h2>}
        <div>{children}</div>
        <div className="mt-4 flex justify-end">
          <button onClick={onClose} className="px-4 py-2 rounded border border-accent-gold hover:bg-accent-hover transition-gold">Close</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
