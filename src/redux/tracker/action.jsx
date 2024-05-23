import * as TYPES from './types';

export const getTracker = (payload) => ({
    type: TYPES.GET_TRACKER,
    payload,
});

export const editTracker= (payload) => ({
    type: TYPES.EDIT_TRACKER,
    payload,
});

export const deleteTracker= (payload) => ({
    type: TYPES.DELETE_TRACKER,
    payload,
});

export const fetchError = (payload) => ({
    type: TYPES.FETCH_ERROR,
    payload,
});