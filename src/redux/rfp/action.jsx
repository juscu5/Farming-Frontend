import * as TYPES from './types';

export const getRfp = (payload) => ({
    type: TYPES.GET_RFP,
    payload,
});

export const editRfp= (payload) => ({
    type: TYPES.EDIT_RFP,
    payload,
});

export const deleteRfp= (payload) => ({
    type: TYPES.DELETE_RFP,
    payload,
});