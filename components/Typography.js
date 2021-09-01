import React from 'react';
import PropTypes from 'prop-types';

function Typography({ children, type, className }) {
  switch (type) {
    case 'primary': {
      return (
        <h1
          className={`text-4xl md:text-6xl font-bold lg:font-extrabold ${className}`}
        >
          {children}
        </h1>
      );
    }
    case 'secondary': {
      return (
        <h2
          className={`text-3xl md:text-4xl font-bold lg:font-extrabold  ${className}`}
        >
          {children}
        </h2>
      );
    }
    case 'section': {
      return (
        <h3 className={`text-lg md:text-xl font-semibold  ${className}`}>
          {children}
        </h3>
      );
    }

    case 'header-caption': {
      return (
        <h4 className={`  text-base font-bold ${className}`}>{children}</h4>
      );
    }
    case 'base': {
      return <h4 className={` text-base ${className}`}>{children}</h4>;
    }
    case 'content': {
      return <p className={`text-lg  ${className}`}>{children}</p>;
    }
    case 'caption': {
      return <span className={`${className}`}>{children}</span>;
    }
    default: {
      return <p>{children}</p>;
    }
  }
}
Typography.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf([
    'primary',
    'secondary',
    'section',
    'header-caption',
    'base',
  ]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Typography;
