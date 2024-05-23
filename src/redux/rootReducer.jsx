import { combineReducers } from 'redux'
import { reducer as authReducer } from './auth';
import { reducer as submitformReducer } from './submitform';
import { reducer as trackerReducer } from './tracker'
import { reducer as rfpReducer } from './rfp';
import { reducer as csReducer } from './costsavings';
import { reducer as workloadReducer } from './workload';
import { reducer as userReducer } from './user';
import { reducer as clientReducer } from './client';

const appReducer = combineReducers({
    auth: authReducer,
    submitform: submitformReducer,
    tracker: trackerReducer,
    rfp: rfpReducer,
    cs: csReducer,
    workload: workloadReducer,
    user: userReducer,
    client: clientReducer
});

const initialState = appReducer({}, {});

const rootReducer = (state, action) =>{
    if (action.type === 'LOGOUT_SUCCESS') {
        state = initialState;
    }
    return appReducer(state, action);
};

export default rootReducer