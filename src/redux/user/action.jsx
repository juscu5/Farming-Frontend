import * as TYPES from './types';

export const getUser = (payload) => ({
    type: TYPES.GET_USER,
    payload,
});

export const addUser = (payload) => ({
    type: TYPES.ADD_USER,
    payload,
});

export const getEmployee = (payload) => ({
    type: TYPES.GET_EMPLOYEE,
    payload,
});

export const clearEmployee = (payload) => ({
    type: TYPES.CLEAR_EMPLOYEE,
    payload,
});

export const editUser= (payload) => ({
    type: TYPES.EDIT_USER,
    payload,
});

export const freezeUser= (payload) => ({
    type: TYPES.FREEZE_USER,
    payload,
});

export const fetchError = (payload) => ({
    type: TYPES.FETCH_ERROR,
    payload,
});