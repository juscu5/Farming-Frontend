import instance from '../../config/instance';

export const addForm = (newData) => {
    return instance.post(`/api/submitform/`, newData);
};

export const getTypes = () => {
    return instance.get(`/api/submitform/types/`);
};

export const getClients = () => {
    return instance.get(`/api/submitform/clients/`);
}

export const getSites = () => {
    return instance.get(`/api/submitform/sites/`);
}