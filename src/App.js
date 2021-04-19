import React, { Component } from 'react';
import Section from './components/Section/Section';
import ContactsList from './components/ContactsList/ContsctsList';
import Form from './components/Form/Form';
import shortid from 'shortid';
import Input from './components/Input/Input';
import Container from './components/Container/Container';
import { CSSTransition } from 'react-transition-group';
import fadeFindContacts from './fadeFindContacts.module.css';
import * as contactsAction from './redux/contacts/contacts-actions';
import contactsOperations from './redux/contacts/contacts-operations';
import { connect } from 'react-redux';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4040';

class App extends Component {
  state = {
    messsage: '',
    alert: null
  };

  componentDidMount() {
    this.props.onParseContacts();
  };


  inputFindId = shortid.generate();

  handleFindChange = event => {
    const filterValue = event.currentTarget;
    this.props.onFilterContacts(filterValue.value);
  };

  render() {
    
    const { contacts, filter } = this.props;

  
    return (
      <>
        <Section title="PhoneBook" appear={true} styles="phonebook">
          <Form/>
        </Section>
    
        <Section title="Contacts" >
          
           
          <CSSTransition in={contacts.length > 1} timeout={250} classNames={fadeFindContacts} unmountOnExit>
            <Container>
              <Input
                label="Find contacts by name"
                type="text"
                name="filter"
                value={filter}
                id={this.inputFindId}
                placeholder="Find..."
                onChange={this.handleFindChange}
              />
              </Container>
            </CSSTransition>
          

          {contacts.length === 0 ? (
            <span style={{ display: 'block', textAlign: 'center' }}>
              No contacts
            </span>
          ) : (
            <ContactsList
              contacts={contacts}
            />
           )} 
        </Section>
      </>
    );
  }
};

const mapStateToProps = (state) => ({
  contacts: state.contacts.items,
  filter: state.contacts.filter
});

const mapDispatchToProps = (dispatch) => ({
  onParseContacts: () => { dispatch(contactsOperations.contactsParse()) },
  onFilterContacts: (filter) => { dispatch(contactsAction.contactFilter(filter)) }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
