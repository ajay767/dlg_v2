import React from 'react';
import MoonLoader from 'react-spinners/MoonLoader';

export default function Loader({
  color = '#2274F0',
  size = 45,
  type = 'custom',
}) {
  switch (type) {
    case 'primary': {
      return <MoonLoader className="block" color={color} size={22} />;
    }
    default: {
      return <MoonLoader color={color} size={size} />;
    }
  }
}

const data = {
  name: 'Ajay yadav',
  email: 'aju@gmail.com',
  quizID: 'sdskj7776789',
  answer: {
    dsdsdsd: 'asasas',
    Asasas: 'asasas',
  },
};
