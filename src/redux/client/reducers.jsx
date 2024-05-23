import * as TYPES from './types';

const initialState = {
    client: [],
    add_client: [],
    edit_client: [],
    freeze_client: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.GET_CLIENT:
            return{
                ...state, 
                client: action.payload
            };
        case TYPES.ADD_CLIENT:
            return{
                ...state, 
                add_client: action.payload
            };
        case TYPES.EDIT_CLIENT:
            return{
                ...state, 
                edit_client: action.payload
            };
        case TYPES.FREEZE_CLIENT:
            return{
                ...state, 
                freeze_client: action.payload
            };
        default:
            return state;
    }
};

export default reducer