import axios from 'axios';
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
} from './contacts-actions';

axios.defaults.baseURL = 'http://localhost:4040';

export const contactsParse = contacts => dispatch => {
    dispatch(parseContactRequest());
    
        axios.get('/contacts')
        .then(({ data }) => dispatch(parseContactSuccess(data)))
        .catch(error => dispatch(parseContactError(error)));
}

export const contactAdd = newContact => dispatch => {
    const contact = {
        name: newContact.name,
        number: newContact.number,
    }

    dispatch(addContactRequest());

    axios.post('/contacts', contact)
        .then(({ data }) => dispatch(addContactSuccess(data)))
        .catch(error => dispatch(addContactError(error)));

};

export const contactDelete = id => dispatch => {
    dispatch(deleteContactRequest());

    axios.delete(`/contacts/${id}`)
        .then(() => dispatch(deleteContactSuccess(id)))
        .catch(error => dispatch(deleteContactError(error)))
}

