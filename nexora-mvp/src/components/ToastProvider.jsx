import React, { createContext, useContext, useCallback, useState } from 'react';

const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

let idCounter = 0;

const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const remove = useCallback((id) => setToasts((ts) => ts.filter((t) => t.id !== id)), []);

  const push = useCallback((type, message, timeout = 3000) => {
    const id = ++idCounter;
    setToasts((ts) => [...ts, { id, type, message }]);
    if (timeout) setTimeout(() => remove(id), timeout);
  }, [remove]);

  const value = {
    success: (m) => push('success', m),
    error: (m) => push('error', m),
    info: (m) => push('info', m),
  };

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="fixed top-4 right-4 z-[60] space-y-2">
        {toasts.map((t) => (
          <div key={t.id} className={`px-4 py-2 rounded shadow text-black animate-[toast_300ms_ease-out] ${
            t.type === 'success' ? 'bg-success' : t.type === 'error' ? 'bg-error' : 'bg-info'
          }`}>
            {t.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export default ToastProvider;
