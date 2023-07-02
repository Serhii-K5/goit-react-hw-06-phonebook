import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction(
  'addContact',
  (nameText, numberText) => {
    return {
      type: 'addContact',
      payload: {
        id: nanoid(),
        name: nameText,
        number: numberText,
      },
    };
  }
);

export const deleteContact = createAction('deleteContact');

export const setFilter = createAction('setFilter');
