import * as TYPES from './types';

export const addFormSuccess = (payload) => ({
    type: TYPES.ADD_FORM_SUCCESS,
    payload,
});

export const getTypes = (payload) => ({
    type: TYPES.GET_TYPES,
    payload,
});

export const getClients = (payload) => ({
    type: TYPES.GET_CLIENTS,
    payload,
});

export const getSites = (payload) => ({
    type: TYPES.GET_SITES,
    payload,
});

export const fetchError = (payload) => ({
    type: TYPES.FETCH_ERROR,
    payload,
});