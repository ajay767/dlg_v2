import React from 'react';
import MoonLoader from 'react-spinners/MoonLoader';

export default function Loader({ color = '#2274F0', size = 45 }) {
  return <MoonLoader color={color} size={size} />;
}
