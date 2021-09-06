import axios from 'axios';
const api = axios.create('https://localhost:4000');

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
