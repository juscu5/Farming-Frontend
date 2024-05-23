import * as ACTION from './action';
import * as API from './services';

export const getClient = (callback) => (dispatch) => {
    API.getClient()
        .then((response) => {
            dispatch(ACTION.getClient(response.data));
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

export const addClient = (clientData, callback) => async (dispatch) => {
    try {
        const response = await API.addClient(clientData);
        dispatch(ACTION.addClient());
        
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

export const editClient = (clientData, callback) => async (dispatch) => {
    try {
        const response = await API.editClient(clientData);
        dispatch(ACTION.editClient());
        
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

export const freezeClient = (clientData, callback) => async (dispatch) => {
    try {
        const response = await API.freezeClient(clientData);
        dispatch(ACTION.freezeClient());
        
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

