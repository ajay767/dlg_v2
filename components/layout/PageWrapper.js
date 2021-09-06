import { useState } from 'react';
import Header from '@front/Header';
import Footer from '@front/Footer';
import Modal from '../Modal';
import MobileSidebar from '@front/MobileSidebar';

function PageWrapper({ children }) {
  const [sidebarState, setSidebarState] = useState(false);

  const toggleSidebar = () => {
    setSidebarState(!sidebarState);
  };

  return (
    <div className="relative">
      {sidebarState && (
        <Modal>
          <MobileSidebar toggleSidebar={toggleSidebar} active={sidebarState} />
        </Modal>
      )}

      <Header toggleSidebar={toggleSidebar} />
      {children}
      <Footer />
    </div>
  );
}

export default PageWrapper;
