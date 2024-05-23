import { createSelector } from 'reselect';
const formSelect = (state) => state.submitform;

export const selectTypesList = createSelector(
    [formSelect],
    (submitform) => submitform.types
);

export const selectClientsList = createSelector(
    [formSelect],
    (submitform) => submitform.clients
);

export const selectSitesList = createSelector(
    [formSelect],
    (submitform) => submitform.sites
);