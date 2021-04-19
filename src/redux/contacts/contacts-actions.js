import { createAction } from '@reduxjs/toolkit';


export const parseContactRequest = createAction('contacts/parseContactRequest');
export const parseContactSuccess = createAction('contacts/parseContactSuccess');
export const parseContactError = createAction('contacts/parseContactError');

export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('contacts/addContactError');

export const deleteContactRequest = createAction('contacts/deleteContactRequest');
export const deleteContactSuccess = createAction('contacts/deleteContactSuccess');
export const deleteContactError = createAction('contacts/deleteContactError');

export const contactFilter = createAction('contacts/delete');
