import instance from '../../config/instance';

export const login = (userData) => {
    return instance.post(`/api/user/login/`, userData);
};

export const rehydrate = () => {
    return instance.get(`/api/user/rehydrate/`);
  };

export const logout = () => {
    return instance.get(`/api/user/logout/`);
  };

export const getCsrf = () => {
    return instance.get(`/api/csrf/`);
};