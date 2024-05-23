import * as TYPES from './types';

export const getClient = (payload) => ({
    type: TYPES.GET_CLIENT,
    payload,
});

export const addClient = (payload) => ({
    type: TYPES.ADD_CLIENT,
    payload,
});

export const editClient = (payload) => ({
    type: TYPES.EDIT_CLIENT,
    payload,
});

export const freezeClient = (payload) => ({
    type: TYPES.FREEZE_CLIENT,
    payload,
});