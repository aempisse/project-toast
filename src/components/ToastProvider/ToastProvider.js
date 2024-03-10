import React from "react";
import useEscapeKey from "../../hooks/useEscapeKey";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toastQueue, setToastQueue] = React.useState([]);

  const toastContextValue = React.useMemo(() => {
    const addToastToQueue = (toast) => {
      const newToastQueue = [...toastQueue];

      newToastQueue.push({ ...toast, id: crypto.randomUUID() });
      setToastQueue(newToastQueue);
    };

    const removeToastFromQueue = (idToRemove) => {
      setToastQueue(toastQueue.filter(({ id }) => id !== idToRemove));
    };

    return {
      toastQueue,
      addToastToQueue,
      removeToastFromQueue,
    };
  }, [toastQueue]);

  useEscapeKey(() => {
    setToastQueue([]);
  });

  return (
    <ToastContext.Provider value={toastContextValue}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
