import React from "react";

const Loader = (
  <div
    id="custom_spinner"
    className="border-r-2 border-b-2 border-blue-50 p-2 rounded-full"
  ></div>
);

function Button({
  btnType = "not-specified",
  children,
  disabled = false,
  className,
  loading,
  ...props
}) {
  switch (btnType) {
    case "primary": {
      return (
        <button
          disabled={disabled}
          className={` ${className}  btn ${
            disabled ? "bg-gray-400" : "bg-primary-dark"
          }`}
          {...props}
        >
          {loading ? Loader : children}
        </button>
      );
    }

    case "secondary": {
      return (
        <button
          {...props}
          disabled={disabled}
          className={` ${className} btn ${
            disabled ? "bg-gray-400" : "bg-primary-light"
          } `}
        >
          {loading ? Loader : children}
        </button>
      );
    }

    case "loading": {
      return (
        <button
          disabled={disabled}
          className={` ${className}  btn ${
            disabled ? "bg-gray-400" : "bg-primary-dark"
          }`}
          {...props}
        ></button>
      );
    }

    case "hero": {
      return (
        <button
          {...props}
          disabled={disabled}
          className={` ${className} btn_hero  border border-primary-dark ${
            disabled ? "bg-gray-400" : "bg-primary-dark"
          } `}
        >
          {loading ? Loader : children}
        </button>
      );
    }
    case "outline": {
      return (
        <button
          {...props}
          disabled={disabled}
          className={` ${className} btn_hero btn_hero_outline  `}
        >
          {loading ? Loader : children}
        </button>
      );
    }

    case "small": {
      return (
        <button
          {...props}
          disabled={disabled}
          className={` ${className} btn btn-small ${
            disabled ? "bg-gray-400" : "bg-primary-dark"
          } `}
        >
          {loading ? Loader : children}
        </button>
      );
    }

    default: {
      return (
        <button
          disabled={disabled}
          className={` ${className} btn ${disabled ? "bg-gray-400" : ""}`}
          {...props}
        >
          {loading ? Loader : children}
        </button>
      );
    }
  }
}

export default Button;
