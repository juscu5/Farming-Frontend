import * as ACTION from './action';
import * as API from './services';

export const getWorkload = (callback) => (dispatch) => {
    API.getWorkload()
        .then((response) => {
            dispatch(ACTION.getWorkload(response.data));
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

export const editWorkload = (editData, callback) => async (dispatch) => {
    try {
        const response = await API.editWorkload(editData);
        dispatch(ACTION.editWorkload());
        
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

// export const deleteWorkload = (deleteData, callback) => () => {
//     API.deleteWorkload(deleteData)
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