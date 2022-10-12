import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

import { AppWrapper, Title, TitleContacts } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('сontacts')) ?? [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  );
  const [filterTex, setFilterTex] = useState('');

  useEffect(() => {
    localStorage.setItem('сontacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
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

    setContacts([addContact, ...contacts]);
  };

  const deletContact = idContact => {
    setContacts(contacts.filter(contact => contact.id !== idContact));
  };

  const filretContacts = e => {
    setFilterTex(e.currentTarget.value);
  };

  const renderContacts = () => {
    const normalized = filterTex.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalized)
    );
  };

  return (
    <AppWrapper>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={addContact} />

      <TitleContacts>Contacts</TitleContacts>
      <Filter value={filterTex} onFilretContacts={filretContacts} />
      <ContactList contacts={renderContacts()} onDeletContact={deletContact} />
    </AppWrapper>
  );
};
