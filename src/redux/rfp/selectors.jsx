import { createSelector } from 'reselect';
const rfpSelect = (state) => state.rfp;

export const selectRfp = createSelector(
    [rfpSelect],
    (rfp) => rfp.rfp
);
