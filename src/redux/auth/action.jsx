import * as TYPES from './types';

export const loginSuccess = (payload) => ({
    type: TYPES.LOGIN_SUCCESS,
    payload,
});

export const rehydrate = (payload) => ({
    type: TYPES.LOGIN_SUCCESS,
    payload,
  });

export const logoutSuccess = () => ({
    type: TYPES.LOGOUT_SUCCESS
});