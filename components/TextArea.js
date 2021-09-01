import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

function TextArea({ label, value, setValue, className }) {
  const id = useMemo(nanoid, []);

  return (
    <div className="rounded-md overflow-hidden mb-4">
      <label htmlFor={id} className="text-sm font-medium text-gray-400 mb-2">
        {label}
      </label>
      <textarea
        style={{ minHeight: '100px' }}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={`${className} rounded  w-full outline-none text-sm font-normal bg-gray-100  p-2 text-gray-700 `}
        id={id}
      ></textarea>
    </div>
  );
}

TextArea.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  setValue: PropTypes.func,
  className: PropTypes.string,
};

export default TextArea;
