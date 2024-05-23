import { createSelector } from 'reselect';
const userSelect = (state) => state.user;

export const selectUser = createSelector(
    [userSelect],
    (user) => user.user
);

export const selectEmployeeList = createSelector(
    [userSelect],
    (user) => user.employee
);
