import instance from '../../config/instance';

export const getCs = () => {
    return instance.get(`/api/costsavings/`);
};

export const addCs = (data) => {
    return instance.post(`/api/costsavings/create/`, data);
};

export const editCs = (editData) => {
    const cost_id = editData.cost_id
    return instance.put(`/api/costsavings/`+ cost_id + `/`, editData)
}