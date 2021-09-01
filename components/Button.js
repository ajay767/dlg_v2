import React from 'react';

function Button({
  btnType = 'not-specified',
  children,
  disabled = false,
  className,
  ...props
}) {
  switch (btnType) {
    case 'primary': {
      return (
        <button
          disabled={disabled}
          className={` ${className}  btn ${
            disabled ? 'bg-gray-400' : 'bg-primary-dark'
          }`}
          {...props}
        >
          {children}
        </button>
      );
    }

    case 'secondary': {
      return (
        <button
          {...props}
          disabled={disabled}
          className={` ${className} btn ${
            disabled ? 'bg-gray-400' : 'bg-primary-light'
          } `}
        >
          {children}
        </button>
      );
    }
    case 'hero': {
      return (
        <button
          {...props}
          disabled={disabled}
          className={` ${className} btn_hero  border border-primary-dark ${
            disabled ? 'bg-gray-400' : 'bg-primary-dark'
          } `}
        >
          {children}
        </button>
      );
    }
    case 'outline': {
      return (
        <button
          {...props}
          disabled={disabled}
          className={` ${className} btn_hero btn_hero_outline ${
            disabled ? 'bg-gray-400' : 'bg-primary-dark'
          } `}
        >
          {children}
        </button>
      );
    }

    case 'small': {
      return (
        <button
          {...props}
          disabled={disabled}
          className={` ${className} btn btn-small ${
            disabled ? 'bg-gray-400' : 'bg-primary-dark'
          } `}
        >
          {children}
        </button>
      );
    }

    default: {
      return (
        <button
          disabled={disabled}
          className={` ${className} btn ${disabled ? 'bg-gray-400' : ''}`}
          {...props}
        >
          {children}
        </button>
      );
    }
  }
}

export default Button;
