import { createSelector } from '@reduxjs/toolkit';
export const getContact = state => state.phonebook.contacts;
export const getFilter = state => state.phonebook.filter;
export const visibleContact = createSelector(
   [getContact, getFilter],
   (contacts, filter) => {
      const normalizeFilter = filter.toLowerCase();

      return contacts.filter(contact =>
         contact.name.toLowerCase().includes(normalizeFilter),
      );
   },
);
