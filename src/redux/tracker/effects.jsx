import * as ACTION from './action';
import * as API from './services';

export const getTracker = (callback) => (dispatch) => {
    API.getTracker()
        .then((response) => {
            dispatch(ACTION.getTracker(response.data));
            if (callback) {
                callback(null, 'Success');
            }
        })
        .catch((error) => {
            dispatch(ACTION.fetchError());
            if (callback) {
                callback(error?.response?.data || error, null);
            }
        })
}

export const editTracker = (editData, callback) => async (dispatch) => {
    try {
        const response = await API.editTracker(editData);
        dispatch(ACTION.editTracker());
        
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

export const deleteTracker1 = (clientData, callback) => async (dispatch) => {
    try {
        const response = await API.deleteTracker(clientData);
        dispatch(ACTION.deleteTracker());
        
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