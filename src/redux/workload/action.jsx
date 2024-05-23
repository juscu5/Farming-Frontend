import * as TYPES from './types';

export const getWorkload = (payload) => ({
    type: TYPES.GET_WORKLOAD,
    payload,
});

export const editWorkload= (payload) => ({
    type: TYPES.EDIT_WORKLOAD,
    payload,
});

export const fetchError = (payload) => ({
    type: TYPES.FETCH_ERROR,
    payload,
});