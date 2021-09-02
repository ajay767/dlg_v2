import React from 'react';
import { NavLink } from '../NavLink';
import routes from './routes';

const Sidebar = ({ handleSignout }) => {
  const renderSidebar = () => {
    return Object.keys(routes).map((route, index) => {
      return (
        <NavLink
          activeClassName="active"
          className="admin__panel--aside-btn "
          key={index}
          href={routes[route].path}
        >
          {route}
        </NavLink>
      );
    });
  };

  return (
    <aside
      className={`w-8/12 md:w-full bg-white min-h-full  border-r border-gray-200`}
    >
      {renderSidebar()}
      <button
        style={{
          background: 'var(--color-red)',
          color: 'var(--color-white)',
        }}
        onClick={handleSignout}
        className="admin__panel--aside-btn"
      >
        Signout
      </button>
    </aside>
  );
};
export default Sidebar;
