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
        <div className="fixed top-0 right-0 bottom-0 left-0 z-50 bg-gray-800 bg-opacity-80 ">
          {children}
        </div>,
        document.querySelector('#portal')
      )
    : null;
};

export default Modal;
