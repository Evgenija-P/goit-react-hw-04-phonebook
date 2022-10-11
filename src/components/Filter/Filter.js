import React from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Label, Input, Title } from './Filter.styled';

// import { Button } from './FeedbackOptions.styled';

export const Filter = ({ value, onFilretContacts }) => {
  const filterId = nanoid(3);
  return (
    <Label htmlFor={filterId}>
      <Title>Find contacts by name</Title>
      <Input
        type="text"
        placeholder="Input name"
        value={value}
        onChange={onFilretContacts}
        id={filterId}
      />
    </Label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilretContacts: PropTypes.func.isRequired,
};
