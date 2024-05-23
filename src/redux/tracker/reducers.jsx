import * as TYPES from './types';

const initialState = {
    tracker: [],
    edit_tracker: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.GET_TRACKER:
            return{
                ...state, 
                tracker: action.payload
            };
        case TYPES.EDIT_TRACKER:
            return{
                 ...state,
                 edit_tracker: action.payload
            }
        default:
            return state;
    }
};

export default reducer