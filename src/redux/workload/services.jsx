import instance from '../../config/instance';

export const getWorkload = () => {
    return instance.get(`/api/workload/`);
};

export const editWorkload = (editData) => {
    const cp = {
        comments_progress: editData['Comments']
    }
    return instance.put(`/api/workload/`+ editData['Tracker ID'] + `/`, cp);
};