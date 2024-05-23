import { createSelector } from 'reselect';
const trackerSelect = (state) => state.tracker;

export const selectTracker = createSelector(
    [trackerSelect],
    (tracker) => tracker.tracker
);
