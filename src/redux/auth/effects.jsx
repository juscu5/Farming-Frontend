import * as ACTION from './action';
import * as API from './services';

export const login = (newData, callback) => (dispatch) => {
    API.login(newData)
        .then((response) => {
            dispatch(ACTION.loginSuccess(response.data));
            if (callback) {
                callback(null, 'Success');
            }
        })
        .catch((error) => {
            console.log('Caught error:', error);
            if (callback) {
                callback(error?.response?.data.error || error, null);
            }
        })
}

export const rehydrate = () => (dispatch) => {
    API.rehydrate()
      .then((response) => {
        dispatch(ACTION.rehydrate(response.data));
      })
      .catch((error) => {
        console.log(error);
        localStorage.removeItem('lastPath');
      });
};

export const authlogout = (callback) => (dispatch) => {
    API.logout()
        .then((response) => {
            if (callback) {
                callback(null, 'Success');
            }
            dispatch(ACTION.loginSuccess());
        })
        .catch((error) => {
            if (callback) {
                callback(error?.response?.data || error, null);
            }
        })
}

export const getCsrf = () => () => {
    API.getCsrf()
      .then((response) => {
        sessionStorage.setItem('securityData', response.data.csrfToken);
      })
      .catch((error) => {
        console.log('error', error);
      });
};