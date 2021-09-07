import axios from 'axios';
import universalCookie from 'universal-cookie';
import { config } from './headers';
import toast from 'react-hot-toast';
const localCookie = new universalCookie();

const api = axios.create({ baseURL: 'http://localhost:4000' });

export const getLocalUser = () => {
  return {
    token: localCookie.get('token'),
    role: localCookie.get('role'),
  };
};
export const createBlog = async (data, onLoad) => {
  try {
    const res = await api.post('/api/v2/blog/create-blog', data, config);
    onLoad(res.data);
  } catch (err) {
    toast.error(`${err.response.data.message}`);
  }
};

export const getAllBlogs = async (onLoad, onError) => {
  try {
    const res = await api.get('/api/v2/blog/get-all-blogs');
    onLoad(res.data);
    return 'success';
  } catch (err) {
    onError('Server is Busy ! Pleasy try after some time');
    return 'fail';
  }
};

export const getBlog = async (data, onLoad, onError) => {
  try {
    const { id } = data;
    const res = await api.get(`/api/v2/blog/get-blog/${id}`);
    onLoad(res.data);
  } catch (err) {
    onError('Server is Busy ! Pleasy try after some time');
  }
};

export const signup = async (data, onLoad) => {
  try {
    const res = await api.post('/api/v1/user/signup', data);
    onLoad(res.data);
  } catch (err) {
    toast.error(err.response.data.message);
  }
};
export const login = async (data, onLoad) => {
  try {
    const res = await api.post('/api/v1/user/login', data);
    onLoad(res.data);
  } catch (err) {
    toast.error(`${err.response.data.message}`);
  }
};

export const getUser = async () => {
  try {
    const user = await api.get('/api/v1/user/getcurrentuser', config);
    return { error: false, ...user.data };
  } catch (err) {
    toast.error(`${err.response.data.message}`);
    return { error: true };
  }
};

export const generateCaptcha = async (data) => {
  try {
    // data will be the name for whom the super admin id making captcha
    const res = await api.post('/api/v1/user/generateCaptcha', data, config);
    onLoad(res.data.result.value);
  } catch (err) {
    toast.error(`${err.response.data.message}`);
  }
};
