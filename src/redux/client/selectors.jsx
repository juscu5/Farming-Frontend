import { createSelector } from 'reselect';
const clientSelect = (state) => state.client;

export const selectClient = createSelector(
    [clientSelect],
    (client) => client.client
);
