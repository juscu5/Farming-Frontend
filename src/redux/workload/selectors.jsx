import { createSelector } from 'reselect';
const workloadSelect = (state) => state.workload;

export const selectWorkload = createSelector(
    [workloadSelect],
    (workload) => workload.workload
);
