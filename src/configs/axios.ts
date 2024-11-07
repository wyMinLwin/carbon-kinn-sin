import axios from "axios";
import type { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import Cookies from "js-cookie";

axios.defaults.baseURL = 'http://989f-209-97-165-215.ngrok-free.app/api/';

// Add a request interceptor
axios.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
      const token = Cookies.get('react-template-app-token');
      if (token) {
          config.headers!.Authorization = `Bearer ${token}`;
      }
    if (token) {
      config.headers!.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      // Redirect to index page if unauthorized
      window.location.href = '/index';
    }
    return Promise.reject(error);
  }
);

export default axios;