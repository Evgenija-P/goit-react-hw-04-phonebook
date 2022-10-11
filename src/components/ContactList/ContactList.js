import React from 'react';
import PropTypes from 'prop-types';
import { MdOutlineDeleteForever } from 'react-icons/md';
import { BsTelephone } from 'react-icons/bs';
import { List, Item, Button } from './ContactList.styled';

export const ContactList = ({ contacts, onDeletContact }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <Item key={id}>
          <p>
            <BsTelephone size={24} color={'blue'} /> {name}: {number}
          </p>
          <Button type="button" onClick={() => onDeletContact(id)}>
            <MdOutlineDeleteForever size={24} color={'blue'} />
          </Button>
        </Item>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeletContact: PropTypes.func.isRequired,
};
