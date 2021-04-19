import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
    addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
    parseContactRequest,
    parseContactSuccess,
    parseContactError,
    contactFilter
} from './contacts-actions'


const itemsReducer = createReducer([], {
    [parseContactSuccess]: (state, {payload}) => [...state, ...payload],
    [addContactSuccess]: (state, {payload}) => [...state, payload],
    [deleteContactSuccess]: (state, {payload}) => state.filter(contact => contact.id !== payload),
})


const filterReducer = createReducer('', {
    [contactFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
    [parseContactRequest]: () => true,
    [parseContactSuccess]: () => false,
    [parseContactError]: () => false,
    [addContactRequest]: () => true,
    [addContactSuccess]: () => false,
    [addContactError]: () => false,
    [deleteContactRequest]: () => true,
    [deleteContactSuccess]: () => false,
    [deleteContactError]: () => false
});


const contactsReducer = combineReducers({
    items: itemsReducer,
    filter: filterReducer,
    load: loading
});

export default contactsReducer;