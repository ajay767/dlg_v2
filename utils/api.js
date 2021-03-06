import axios from 'axios';
import toast from 'react-hot-toast';
import Cookies from 'js-cookie';

// const api = axios.create({ baseURL: 'http://localhost:4000' });
const api = axios.create({ baseURL: 'https://dlgv2.herokuapp.com' });

export const getConfig = () => {
  return {
    headers: {
      authorization: Cookies.get('token'),
    },
  };
};

export const getLocalUser = () => {
  return {
    token: Cookies.get('token'),
    role: Cookies.get('role'),
  };
};

export const createBlog = async (data, onLoad) => {
  try {
    const res = await api.post('/api/v2/blog/create-blog', data, getConfig());
    onLoad(res.data);
  } catch (err) {
    toast.error(`${err.response.data.message}`);
  }
};

export const getAllBlogs = async () => {
  try {
    const res = await api.get('/api/v2/blog/get-all-blogs');
    return { status: 'success', ...res.data };
  } catch (err) {
    toast.error('Server is Busy ! Pleasy try after some time');
    return { status: 'fail' };
  }
};

export const getBlog = async (data) => {
  try {
    const { id } = data;
    const res = await api.get(`/api/v2/blog/get-blog/${id}`);
    return res.data.blog;
  } catch (err) {
    toast.error(err.response.data.message);
    return { status: 'fail' };
  }
};
export const updateBlog = async (id, data, onLoad) => {
  try {
    const result = await api.patch(`/api/v2/blog/update-blog/${id}`, data);
    onLoad(result.data.blog);
  } catch (err) {
    toast.error(`${err.response.data.message}`);
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
export const login = async (data, onLoad, onError) => {
  try {
    const res = await api.post('/api/v1/user/login', data);
    onLoad(res.data);
  } catch (err) {
    toast.error(`${err.response.data.message}`);
    onError();
  }
};

export const getUser = async () => {
  try {
    const response = await api.get('/api/v1/user/getcurrentuser', getConfig());
    const user = { user: response.data.user, error: false };
    return user;
  } catch (err) {
    toast.error(`${err.response.data.message}`);
    return { error: true };
  }
};

export const generateCaptcha = async (data) => {
  try {
    // data will be the name for whom the super admin id making captcha
    const res = await api.post(
      '/api/v1/user/generateCaptcha',
      data,
      getConfig()
    );
    return { status: 'success', ...res.data.result };
  } catch (err) {
    toast.error(`${err.response.data.message}`);
    return { error: 'fail' };
  }
};

export const updateUser = async (data) => {
  try {
    console.log(data);
    const current_user = await getUser();
    console.log(current_user.user);
    const { _id } = current_user.user;
    const res = await api.patch(
      `/api/v1/user/updateuser/${_id}`,
      data,
      getConfig()
    );
    return { status: 'success' };
  } catch (err) {
    toast.error(`${err.response}`);
    return { status: 'fail' };
  }
};

export const getAllQuiz = async () => {
  try {
    const res = await api.get('/api/v2/quiz/get-all-quiz');
    return res.data;
  } catch (error) {
    toast.error(`${err.response}`);
    return { status: 'fail' };
  }
};

export const getQuiz = async (data) => {
  try {
    const { id } = data;
    const res = await api.get(`/api/v2/quiz/get-quiz/${id}`);
    return res.data;
  } catch (error) {
    toast.error(`${error.response}`);
    return { status: 'fail' };
  }
};

export const getLatestQuiz = async () => {
  try {
    const res = await api.get(`/api/v2/quiz/get-latest-quiz`);
    return res.data;
  } catch (error) {
    toast.error(`${error.response}`);
    return { status: 'fail' };
  }
};

export const getAllQuestion = async () => {
  try {
    const response = await api.get('/api/v2/quiz/get-all-questions');
    return response.data;
  } catch (err) {
    toast.error(`${err.response.data.message}`);
    return { status: 'fail' };
  }
};

export const createQuestion = async (data) => {
  try {
    const response = await api.post(
      '/api/v2/quiz/create-question',
      data,
      getConfig()
    );
    toast.success('question created!');
    return response.data;
  } catch (err) {
    toast.error(`${err.response.data.message}`);
    return { status: 'fail' };
  }
};

export const deleteQuestion = async (id) => {
  try {
    const response = await api.delete(
      `/api/v2/quiz/delete-question/${id}`,
      getConfig()
    );
    toast.success('Deleted successfully!');
    return response.data;
  } catch (err) {
    toast.error(`${err.response.data.message}`);
    return { status: 'fail' };
  }
};

export const createQuiz = async (data) => {
  try {
    const response = await api.post(
      '/api/v2/quiz/create-quiz',
      data,
      getConfig()
    );
    toast.success('quiz created!');
    return response.data;
  } catch (err) {
    toast.error(`${err.response.data.message}`);
    return { status: 'fail' };
  }
};

export const submitQuiz = async (data, onSuccess, onError) => {
  try {
    const response = await api.post('/api/v2/quiz/submit', data);
    toast.success('Submitted!');
    onSuccess();
    return response.data;
  } catch (error) {
    toast.error(`${error.response.data.message}`);
    onError();
    return { status: 'fail' };
  }
};
