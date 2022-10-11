import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

import { AppWrapper, Title, TitleContacts } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  componentDidMount() {
    const contacts = localStorage.getItem('сontacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (nextContacts !== prevContacts) {
      localStorage.setItem('сontacts', JSON.stringify(nextContacts));
    }
  }

  addContact = ({ name, number }) => {
    const { contacts } = this.state;

    const addContact = {
      id: nanoid(5),
      name,
      number,
    };

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === addContact.name.toLowerCase()
      )
    ) {
      return alert(`${addContact.name} is already in contacts.`);
    }

    this.setState(({ contacts }) => ({
      contacts: [addContact, ...contacts],
    }));
  };

  deletContact = idContact => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== idContact),
    }));
  };

  filretContacts = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { filter } = this.state;
    const normalized = this.state.filter.toLocaleLowerCase();
    const renderContacts = this.state.contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalized)
    );

    return (
      <AppWrapper>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.addContact} />

        <TitleContacts>Contacts</TitleContacts>
        <Filter value={filter} onFilretContacts={this.filretContacts} />
        <ContactList
          contacts={renderContacts}
          onDeletContact={this.deletContact}
        />
      </AppWrapper>
    );
  }
}
