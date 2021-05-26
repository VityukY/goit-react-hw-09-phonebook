import { createAction } from '@reduxjs/toolkit';

export const fetchContactRequest = createAction('contacts/fetchRequest');
export const fetchContactSucces = createAction('contacts/fetchSucces');
export const fetchContactError = createAction('contacts/fetchError');

export const addContactRequest = createAction('contacts/addRequest');
export const addContactSucces = createAction('contacts/addSucces');
export const addContactError = createAction('contacts/addError');

export const deleteContactRequest = createAction('contacts/deleteRequest');
export const deleteContactSucces = createAction('contacts/deleteSucces');
export const deleteContactError = createAction('contacts/deleteError');

export const changeFilter = createAction('contacts/cahngeFilter');
