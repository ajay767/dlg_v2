import { useState, useEffect } from 'react';
import AdmiPortal from '../layout/AdminPortal';
import Header from './Header';
import Sidebar from './Sidebar';

function Wrapper({ children }) {
  const [sidebar, setSideBar] = useState(false);
  const handleSignout = () => {
    console.log('signing out!!');
  };
  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768) {
        setSideBar(false);
      }
    });
  }, []);

  return (
    <AdmiPortal>
      <div className="admin__container">
        <div className="admin__container-header">
          <Header
            sidebarHandler={() => setSideBar((currState) => !currState)}
            handleSignout={handleSignout}
          />
        </div>
        <div className="admin__container-content grid grid-cols-12 relative flex-1">
          <div
            className={`z-20 absolute transform top-0 left-0 bottom-0  ${
              sidebar ? '-translate-x-full' : ''
            } transition-all w-96 md:w-full md:col-span-3 xl:col-span-2 md:static  z-10`}
          >
            <Sidebar handleSignout={handleSignout} />
          </div>
          <div className="col-span-12 md:col-span-9 xl:col-span-10">
            <div className="admin__panel--content">{children}</div>
          </div>
        </div>
      </div>
    </AdmiPortal>
  );
}

export default Wrapper;
