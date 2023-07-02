import { addContact, deleteContact, setFilter } from './actions';
import { createReducer } from '@reduxjs/toolkit';
import defaultData from 'components/data/data.json'

const initialState = {
  contacts: {
    items: defaultData,
    filter: '',
  },
};

export const contactsReducer = createReducer(initialState.contacts, {
  [addContact]: (state, action) => {
    state.items.push(action.payload);
  },
  [deleteContact]: (state, action) => {
    const index = state.items.findIndex(
      contacts => contacts.id === action.payload
    );
    state.items.splice(index, 1);
  },
  [setFilter]: (state, action) => {
    state.filter = action.payload;
  },
});