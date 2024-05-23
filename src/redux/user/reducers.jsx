import * as TYPES from './types';

const initialState = {
    user: [],
    edit_user: [],
    add_user: [],
    freeze_user: [],
    employee: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.GET_USER:
            return{
                ...state, 
                user: action.payload
            };
        case TYPES.ADD_USER:
            return{
                ...state, 
                user: action.payload
            };
        case TYPES.GET_EMPLOYEE:
            return{
                ...state, 
                employee: action.payload
            };
        case TYPES.CLEAR_EMPLOYEE:
            return{
                ...state,
                employee: [],
            }
        case TYPES.EDIT_USER:
            return{
                ...state, 
                edit_user: action.payload
            };
        case TYPES.FREEZE_USER:
            return{
                ...state, 
                freeze_user: action.payload
            };
        default:
            return state;
    }
};

export default reducer