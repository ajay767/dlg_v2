import axios from 'axios';
import universalCookie from 'universal-cookie';

const localCookie = new universalCookie();

const api = axios.create({ baseURL: 'https://localhost:4000' });

export const getLocalUser = () => {
  return {
    token: localCookie.get('token'),
    role: localCookie.get('role'),
  };
};

export const createBlog = (data, onSuccess, onError) => {
  api
    .post('/api/v2/blog/create', data)
    .then((res) => {
      onSuccess(res.data);
    })
    .catch((error) => {
      onError(error);
    });
};
