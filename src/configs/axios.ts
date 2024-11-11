import axios from "axios";
import type {AxiosResponse, InternalAxiosRequestConfig} from "axios";
import Cookies from "js-cookie";

axios.defaults.baseURL = 'https://carbonkinnsin-production.up.railway.app/api/';

// Add a request interceptor
axios.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const route = window.location.href;
        const token = Cookies.get('cks-app-token');
        if (token && !route.includes('auth')) {
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
        const route = window.location.href;
        if (error.response && error.response.status === 401 && !route.includes('auth')) {
            // Redirect to index page if unauthorized
            window.location.href = '/auth/login';
        }
        return Promise.reject(error);
    }
);

export default axios;