import instance from '../../config/instance';

export const getClient = () => {
    return instance.get(`/api/submitform/clients/`);
};

export const addClient = (clientData) => {
    return instance.post(`/api/submitform/client/create/`, clientData);
};

export const editClient = (clientData) => {
    return instance.put(`/api/submitform/client/update/`+ clientData.client_id +`/` , clientData);
};

export const freezeClient = (clientData) => {
    const userData = {
        last_updated_by: clientData.last_updated_by
    }
    return instance.put(`/api/submitform/client/freeze/`+ clientData.client_id +`/` , userData);
};