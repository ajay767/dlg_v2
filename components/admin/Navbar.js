import { NavLink } from '../NavLink';

function NavBar({ navItem = [] }) {
  const renderNavItem = () => {
    return navItem.map((btnItem, index) => {
      return (
        <NavLink
          exact
          href={btnItem.path}
          key={index}
          activeClassName="active"
          className="admin__panel--content-nav-btn"
        >
          {btnItem.title}
        </NavLink>
      );
    });
  };
  return <div className="admin__panel--content-nav">{renderNavItem()}</div>;
}

export default NavBar;
