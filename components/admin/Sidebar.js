import React from 'react';
import { NavLink } from '../NavLink';
import routes from './routes';
import { BsFillLockFill } from 'react-icons/bs';
import { getLocalUser } from '@utils/api';

const user = getLocalUser();

const Sidebar = ({ handleSignout }) => {
  const renderSidebar = () => {
    return Object.keys(routes).map((route, index) => {
      let access = routes[route].access.includes(user.role);
      return (
        <NavLink
          activeClassName="active"
          className="admin__panel--aside-btn flex justify-between"
          key={index}
          href={access ? routes[route].path : '/admin/auth'}
        >
          {route} {!access && <BsFillLockFill size={20} />}
        </NavLink>
      );
    });
  };

  return (
    <aside
      className={`w-8/12 md:w-full bg-white min-h-full  border-r border-gray-200`}
    >
      {renderSidebar()}
      <button onClick={handleSignout} className="admin__panel--aside-btn hero">
        Signout
      </button>
    </aside>
  );
};
export default Sidebar;
