import * as TYPES from './types';

const initialState = {
    workload: [],
    edit_workload: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.GET_WORKLOAD:
            return{
                ...state, 
                workload: action.payload
            };
        case TYPES.EDIT_WORKLOAD:
            return{
                ...state, 
                edit_workload: action.payload
            };
        default:
            return state;
    }
};

export default reducer