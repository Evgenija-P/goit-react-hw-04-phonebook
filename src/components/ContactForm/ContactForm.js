/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { AiOutlineUserAdd } from 'react-icons/ai';

import { Form, Label, Input, Button } from './ContactForm.styled';

const DEFAULT_STATE = {
  name: '',
  number: '',
};

export class ContactForm extends Component {
  state = { ...DEFAULT_STATE };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ ...DEFAULT_STATE });
  };

  render() {
    const { name, number } = this.state;
    const nameId = nanoid(3);
    const numberId = nanoid(3);
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Label htmlFor={nameId}>Name</Label>
          <Input
            type="text"
            name="name"
            value={name}
            id={nameId}
            placeholder="Name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
          />
          <Label htmlFor={numberId}>Number</Label>
          <Input
            type="tel"
            name="number"
            value={number}
            id={numberId}
            placeholder="Number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
          />
          <Button type="submit">
            <AiOutlineUserAdd size={24} color={'blue'} />
          </Button>
        </Form>
      </>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
