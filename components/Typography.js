import React from 'react';
import PropTypes from 'prop-types';

function Typography({ children, type, className, ...props }) {
  switch (type) {
    case 'primary': {
      return (
        <h1
          {...props}
          className={`typography typography__primary ${className}`}
        >
          {children}
        </h1>
      );
    }
    case 'secondary': {
      return (
        <h2
          {...props}
          className={`typography typography__secondary  ${className}`}
        >
          {children}
        </h2>
      );
    }

    case 'section': {
      return (
        <h3
          {...props}
          className={`typography typography__section ${className}`}
        >
          {children}
        </h3>
      );
    }

    case 'header-caption': {
      return (
        <h4
          {...props}
          className={`typography typography__header-caption   ${className}`}
        >
          {children}
        </h4>
      );
    }

    case 'content': {
      return (
        <p
          {...props}
          className={`typography typography__content  ${className}`}
        >
          {children}
        </p>
      );
    }
    case 'caption': {
      return (
        <p
          {...props}
          className={`typography typography__caption  ${className}`}
        >
          {children}
        </p>
      );
    }
    case 'blockquote': {
      return (
        <p
          {...props}
          className={`typography typography__blockquote  ${className}`}
        >
          {children}
        </p>
      );
    }
    case 'lable': {
      return (
        <p
          {...props}
          className={`text-base font-medium text-gray-400  ${className}`}
        >
          {children}
        </p>
      );
    }
    case 'list-item': {
      return (
        <li
          {...props}
          className={`typography typography__list-item  ${className}`}
        >
          {children}
        </li>
      );
    }
    case 'code': {
      return (
        <div className={`typography   ${className}`}>
          <code className='code'>{children}</code>
        </div>
      );
    }
    default: {
      return (
        <p className={`typography   ${className}`} {...props}>
          {children}
        </p>
      );
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
    'content',
    'list-item',
    'blockquote',
    'caption',
    'lable',
  ]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Typography;
