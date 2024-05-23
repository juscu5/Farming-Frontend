import * as TYPES from './types';

const initialState = {
    login: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.LOGIN_SUCCESS:
            return{
                ...state, 
                login: action.payload
            };
        case TYPES.LOGOUT_SUCCESS:
            return{
                ...state,
                login: initialState.login,
            }
        default:
            return state;
    }
};

export default reducer