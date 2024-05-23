import * as ACTION from './action';
import * as API from './services';
import { toast } from 'react-toastify';

export const getRfp = () => (dispatch) => {
    API.getRfp()
        .then((response) => {
            dispatch(ACTION.getRfp(response.data));
        })
        .catch((error) => {
            dispatch(ACTION.fetchError(error));
        })
}

export const editRfp = (editData, callback) => async (dispatch) => {
    try {
        const response = await API.editRfp(editData);
        dispatch(ACTION.editRfp());
        
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
        if (callback) {
            callback(error.status || error, null);
        }
    }
}

export const deleteRfp1 = (clientData, callback) => async (dispatch) => {
    try {
        const response = await API.deleteRfp(clientData);
        dispatch(ACTION.deleteRfp());
        
        if (response.status === 201 || 200) {
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