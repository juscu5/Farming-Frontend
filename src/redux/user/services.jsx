import instance from '../../config/instance';

export const getUser = () => {
    return instance.get(`/api/user/`);
};

export const addUser = (userData) => {
    return instance.post(`/api/user/create/`, userData);
};

export const getEmployee = (searchData) => {
    return instance.get(`/api/user/employee?query=`+searchData.search);
};

export const editUser = (editUser) => {
    return instance.put(`/api/user/update/`, editUser);
};

export const freezeUser = (fUser) => {
    return instance.put(`/api/user/freeze/`+ fUser.login_id + `/`, fUser);
};