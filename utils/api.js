import axios from "axios";
import { config } from "./headers";
import toast from "react-hot-toast";
import Cookies from "js-cookie";

const api = axios.create({ baseURL: "http://localhost:4000" });

export const getLocalUser = () => {
  return {
    token: Cookies.get("token"),
    role: Cookies.get("role"),
  };
};
export const createBlog = async (data, onLoad) => {
  try {
    const res = await api.post("/api/v2/blog/create-blog", data, config);
    onLoad(res.data);
  } catch (err) {
    toast.error(`${err.response.data.message}`);
  }
};

export const getAllBlogs = async (onLoad, onError) => {
  try {
    const res = await api.get("/api/v2/blog/get-all-blogs");
    onLoad(res.data);
    return "success";
  } catch (err) {
    onError("Server is Busy ! Pleasy try after some time");
    return "fail";
  }
};

export const getBlog = async (data, onLoad, onError) => {
  try {
    const { id } = data;
    const res = await api.get(`/api/v2/blog/get-blog/${id}`);
    onLoad(res.data);
  } catch (err) {
    onError("Server is Busy ! Pleasy try after some time");
  }
};

export const signup = async (data, onLoad) => {
  try {
    const res = await api.post("/api/v1/user/signup", data);
    onLoad(res.data);
  } catch (err) {
    toast.error(err.response.data.message);
  }
};
export const login = async (data, onLoad) => {
  try {
    const res = await api.post("/api/v1/user/login", data);
    onLoad(res.data);
  } catch (err) {
    toast.error(`${err.response.data.message}`);
  }
};

export const getUser = async (onLoad) => {
  try {
    console.log("Hello from getUser", config);
    const user = await api.get("/api/v1/user/getcurrentuser", config);
    console.log("Hello from getUser2");
    console.log(user);
    onLoad(user.data.user);
  } catch (err) {
    console.log(err);
    console.log("Hello from getUser3");
    toast.error(`${err.response.data.message}`);
    return { error: true };
  }
};

export const generateCaptcha = async (data) => {
  try {
    // data will be the name for whom the super admin id making captcha
    const res = await api.post("/api/v1/user/generateCaptcha", data, config);
    return { status: "success", ...res.data.result };
  } catch (err) {
    toast.error(`${err.response.data.message}`);
    return { error: "fail" };
  }
};
