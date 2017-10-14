import React from 'react';
import { bool, func, string } from 'prop-types';
import styled from 'styled-components';
import { baseStyles } from '../styles';

const StyledInput = styled.input`
  ${baseStyles};
`;

const FormInput = ({ id, name, placeholder, value, onChange, required }) => (
  <StyledInput
    id={id || name}
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    required={required}
  />
);

FormInput.propTypes = {
  id: string,
  name: string.isRequired,
  placeholder: string,
  value: string,
  onChange: func.isRequired,
  required: bool
};

FormInput.defaultProps = {
  required: false,
  onChange: () => {}
};

export default FormInput;
