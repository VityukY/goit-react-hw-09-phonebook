import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './contacts-actions';

const contactsReducer = createReducer([], {
   [actions.fetchContactSucces]: (_, { payload }) => payload,
   [actions.addContactSucces]: (state, { payload }) => [...state, payload],
   [actions.deleteContactSucces]: (state, { payload }) =>
      state.filter(contact => contact.id !== payload),
});
const filterReducer = createReducer('', {
   [actions.changeFilter]: (_, { payload }) => payload,
});

const errorReducer = createReducer('', {
   [actions.fetchContactError]: (_, { payload }) =>
      console.log('payload', payload),
   [actions.addContactError]: (_, { payload }) =>
      console.log('payload', payload),
   [actions.deleteContactError]: (_, { payload }) =>
      console.log('payload', payload),
});
const complexContactsReducer = combineReducers({
   contacts: contactsReducer,
   filter: filterReducer,
   error: errorReducer,
});

export default complexContactsReducer;
