import * as TYPES from './types';

const initialState = {
    rfp: [],
    edit_rfp: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.GET_RFP:
            return{
                ...state, 
                rfp: action.payload
            };
        case TYPES.EDIT_RFP:
            return{
                ...state,
                edit_rfp: action.payload
            }
        default:
            return state;
    }
};

export default reducer