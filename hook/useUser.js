import { useState, useEffect } from 'react';
import { getUser } from '../utils/api';
function useUser() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    role: '',
    token: '',
  });
  const onLoad = (user) => {
    setUser(user);
  };
  useEffect(() => {
    getUser(onLoad);
  }, []);
  return user;
}
export default useUser;
