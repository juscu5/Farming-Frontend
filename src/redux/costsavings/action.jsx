import * as TYPES from './types';

export const getCs = (payload) => ({
    type: TYPES.GET_CS,
    payload,
});

export const addCs = (payload) => ({
    type: TYPES.ADD_CS,
    payload,
});

export const editCs = (payload) => ({
    type: TYPES.EDIT_CS,
    payload,
});