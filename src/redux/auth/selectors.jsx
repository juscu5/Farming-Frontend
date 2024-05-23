import { createSelector } from 'reselect';
const userSelect = (state) => state.auth;

export const selectUserList = createSelector(
    [userSelect],
    (auth) => auth.login.user?.user_role
);

export const selectEmployee = createSelector(
    [userSelect],
    (auth) => auth.login.user?.employee_full_name
);