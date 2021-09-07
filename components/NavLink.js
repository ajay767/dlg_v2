import { useRouter } from 'next/router';
import Link from 'next/link';
import PropTypes from 'prop-types';

NavLink.defaultProps = {
  exact: false,
};

function NavLink({ href, exact, children, activeClassName, ...props }) {
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  if (isActive) {
    props.className += ` ${activeClassName}`;
  }

  return (
    <Link href={href}>
      <a {...props}>{children}</a>
    </Link>
  );
}

export { NavLink };

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  exact: PropTypes.bool,
  activeClassName: PropTypes.string.isRequired,
};
