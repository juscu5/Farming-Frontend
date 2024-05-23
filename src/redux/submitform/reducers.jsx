import * as TYPES from './types';

const initialState = {
    sub_forms: [],
    types: [],
    clients: [],
    sites: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.ADD_FORM_SUCCESS:
            return{
                ...state, 
                sub_forms: [...action.payload]
            };
        case TYPES.GET_TYPES:
            return{
                ...state, 
                types: action.payload
            };
        case TYPES.GET_CLIENTS:
            return{
                ...state, 
                clients: action.payload
            };
        case TYPES.GET_SITES:
            return{
                ...state, 
                sites: action.payload
            };
        default:
            return state;
    }
};

export default reducer