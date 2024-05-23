import { createSelector } from 'reselect';
const csSelect = (state) => state.cs;

export const selectCs = createSelector(
    [csSelect],
    (cs) => cs.cs
);
