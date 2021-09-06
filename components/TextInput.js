import React, { useMemo } from "react";
import propTypes from "prop-types";
import { nanoid } from "nanoid";

function TextInput({
  textbox = "primary",
  value,
  setValue,
  type = "text",
  className,
  inputClassName,
  label,
  ...props
}) {
  const id = useMemo(() => nanoid(), []);
  switch (textbox) {
    case "primary": {
      return (
        <div className={`rounded overflow-hidden ${className} `}>
          {label && (
            <label
              htmlFor={id}
              className="text-base font-medium text-gray-400 mb-2"
            >
              {label}
            </label>
          )}
          <input
            id={id}
            {...props}
            className={`rounded  w-full outline-none text-base font-normal bg-gray-200  p-3 text-gray-700 ${inputClassName} `}
            type={type}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      );
    }

    default: {
      return (
        <input
          id={id}
          {...props}
          className={`rounded  w-full outline-none text-sm  font-normal   p-2 ${className}  `}
          type={type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      );
    }
  }
}

TextInput.propTypes = {
  label: propTypes.string,
  type: propTypes.string,
  value: propTypes.oneOfType([propTypes.string, propTypes.number]),
  setValue: propTypes.func,
  className: propTypes.string,
  textbox: propTypes.string,
};

export default TextInput;
