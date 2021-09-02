import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted
    ? createPortal(
        <div className="fixed top-0 right-0 bottom-0 left-0 z-50 bg-gray-800 bg-opacity-80 flex items-center justify-center ">
          <div className="bg-white p-2 rounded shadow-md w-max mx-auto">
            {children}
          </div>
        </div>,
        document.querySelector('#portal')
      )
    : null;
};

export default Modal;
