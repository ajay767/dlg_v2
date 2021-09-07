import { getUser } from '../utils/api';

async function useUser() {
  const user = getUser();
  if (user.error) {
    return null;
  } else return user;
}

export default useUser;
