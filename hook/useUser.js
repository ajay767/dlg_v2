import { useState, useEffect } from 'react';
import { getUser } from '../utils/api';

const initialState = {
  user: {
    name: '',
    email: '',
    role: '',
    photo: '',
    coupan: '',
  },
  loading: true,
};

function useUser() {
  const [user, setUser] = useState(initialState);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await getUser();
      if (response.error) {
        console.log(error);
        setUser({ ...user, loading: false });
      } else {
        setUser({ user: response.user, loading: false });
      }
    };
    fetchUser();
  }, []);

  return user;
}
export default useUser;
