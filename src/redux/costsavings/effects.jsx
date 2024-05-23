import * as ACTION from './action';
import * as API from './services';
import { toast } from 'react-toastify';

export const getCs = () => (dispatch) => {
    API.getCs()
        .then((response) => {
            dispatch(ACTION.getCs(response.data));
        })
        .catch((error) => {
            dispatch(ACTION.fetchError(error));
        })
}

export const addCs = (data, callback) => async (dispatch) => {
    try {
        const response = await API.addCs(data);
        dispatch(ACTION.addCs());
        
        if (response.status === 200) {
            if (callback) {
                callback(200, 'Success');
            }
        } else {
            if (callback) {
                callback(response.status || response.statusText, 'Error occurred');
            }
        }
    } catch (error) {
        console.log(error)
        if (callback) {
            callback(error.status || error, null);
        }
    }
}

export const editCs = (editData, callback) => async (dispatch) => {
    try {
        const response = await API.editCs(editData);
        dispatch(ACTION.editCs());
        
        if (response.status === 200) {
            if (callback) {
                callback(200, 'Success');
            }
        } else {
            if (callback) {
                callback(response.status || response.statusText, 'Error occurred');
            }
        }
    } catch (error) {
        console.log(error)
        if (callback) {
            callback(error.status || error, null);
        }
    }
}