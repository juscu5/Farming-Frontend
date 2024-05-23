import axios from 'axios';
import config from './index';
// import { getAuthToken } from './AuthService';

export const instanceAuth = axios.create({
  baseURL: config().baseUrl,
});

const instance = axios.create({
  baseURL: config().baseUrl,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  function (config) {
    const securityToken = sessionStorage.getItem('securityData');
    config.headers['X-CSRFToken'] = securityToken;

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
