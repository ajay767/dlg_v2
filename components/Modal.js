import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { BsPlus } from 'react-icons/bs';
import Typography from '@components/Typography';

const Modal = ({ children, title, onClose, ...props }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted
    ? createPortal(
        <div className="fixed top-0 right-0 bottom-0 left-0 text-gray-900 bg-gray-800 bg-opacity-80 z-50 flex justify-center items-center ">
          {title && (
            <div
              {...props}
              className="text-gray-600 relative bg-white w-full mx-4 md:mx-0 md:w-8/12 lg:w-6/12  rounded p-3 md:p-5 overflow-y-scroll scrollbar-hide"
            >
              <div className="flex items-center justify-between">
                <Typography type="section">{title}</Typography>
                <div className="cursor-pointer  h-10 w-10 md:h-10 md:w-10 rounded-full bg-gray-200 flex-center ml-auto">
                  <BsPlus
                    onClick={onClose}
                    size={30}
                    className="text-gray-700  transform rotate-45"
                  />
                </div>
              </div>

              {children}
            </div>
          )}
          {!title && children}
        </div>,
        document.querySelector('#portal')
      )
    : null;
};

export default Modal;
