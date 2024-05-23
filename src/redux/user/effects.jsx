import * as ACTION from './action';
import * as API from './services';

export const getUser = (callback) => (dispatch) => {
    API.getUser()
        .then((response) => {
            dispatch(ACTION.getUser(response.data));
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

export const addUser = (addData, callback) => async (dispatch) => {
    try {
        const response = await API.addUser(addData);
        dispatch(ACTION.addUser());
        
        if (response.status === 200) {
            if (callback) {
                callback(200, 'Success');
            }
        } else {
            if (callback) {
                callback(response.data.message);
            }
        }
    } catch (error) {
        console.log(error)
        if (callback) {
            callback(error.response.data.message || error, null);
        }
    }
}

export const getEmployee = (searchData, callback) => (dispatch) => {
    API.getEmployee(searchData)
        .then((response) => {
            dispatch(ACTION.getEmployee(response.data));
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

export const clearEmployee = () => (dispatch) => {
    dispatch(ACTION.clearEmployee());
}

export const editUser = (editData, callback) => async (dispatch) => {
    try {
        const response = await API.editUser(editData);
        dispatch(ACTION.editUser());
        
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

export const freezeUser = (editData, callback) => async (dispatch) => {
    try {
        const response = await API.freezeUser(editData);
        dispatch(ACTION.freezeUser());
        
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

// export const deleteTracker1 = (deleteData, callback) => () => {
//     API.deleteTracker(deleteData)
//         .then((response) => {
//             if (callback) {
//                 callback(null, 'Success');
//             }
//         })
//         .catch((error) => {
//             if (callback) {
//                 callback(error?.response?.data || error, null);
//             }
//         })
// }