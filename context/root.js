import React, { useReducer, useEffect, useState } from 'react';
import { getUser } from '@utils/api';

export const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_USER': {
      const data = action.payload;
      return { ...state, ...data };
    }
    default: {
      return { ...action.payload };
    }
  }
};

export const Provider = ({ children }) => {
  const [data, dispatch] = useReducer(reducer, {
    name: '',
    photo: '/assets/images/user.png',
    role: 'user',
    coupan: '',
    domain: '',
  });

  const fetchUser = async () => {
    const data = await getUser();
    dispatch({ type: 'FETCH_USER', payload: data.user });
  };

  return (
    <Context.Provider value={{ ...data, fetchUser }}>
      {children}
    </Context.Provider>
  );
};
