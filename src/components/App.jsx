import { Component } from 'react';
import { GlobalStyle } from './GlobalStyles';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount = () => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      this.setState({
        contacts: JSON.parse(savedContacts),
      });
    }
  };
  componentDidUpdate = prevState => {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  };

  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  findContact = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  render() {
    const {
      addContact,
      deleteContact,
      getVisibleContacts,
      findContact,
      state,
    } = this;

    return (
      <>
        <GlobalStyle />
        <h1>Phonebook</h1>
        <ContactForm onAdd={addContact} contacts={state.contacts} />
        <h2>Contacts</h2>
        <Filter onChange={findContact} value={state.filter} />
        <ContactList
          getContacts={getVisibleContacts()}
          onDelete={deleteContact}
        />
      </>
    );
  }
}
