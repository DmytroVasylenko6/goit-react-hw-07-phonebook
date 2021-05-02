import { connect } from 'react-redux';
import { ContactsList } from './ContsctsList';
import {contactDelete} from '../../redux/contacts/contacts-operations';
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';

const mapStateToProps = (state) => ({
  contacts: getVisibleContacts(state)
})

const mapDispatchToProps = dispatch => ({
onDeleteContact: (id) => {dispatch(contactDelete(id))}
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);