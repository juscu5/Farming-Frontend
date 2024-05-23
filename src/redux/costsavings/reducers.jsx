import * as TYPES from './types';

const initialState = {
    cs: [],
    add_cs: [],
    edit_cs: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.GET_CS:
            return{
                ...state, 
                cs: action.payload
            };
        case TYPES.ADD_CS:
            return{
                ...state, 
                add_cs: action.payload
            };
        case TYPES.EDIT_CS:
            return{
                ...state, 
                edit_cs: action.payload
            };
        default:
            return state;
    }
};

export default reducer