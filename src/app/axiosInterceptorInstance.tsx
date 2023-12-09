import axios from "axios";

const axiosInterceptorInstance = axios.create({
  baseURL: process.env.BASE_URL_DEMO_APP,
});

axiosInterceptorInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInterceptorInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInterceptorInstance;
