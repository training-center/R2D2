import React from 'react';
import { bool, func, string } from 'prop-types';
import styled from 'styled-components';
import { baseStyles } from '../styles';

const StyledInput = styled.input`
  ${baseStyles};
`;

const FormInput = ({ name, placeholder, value, onChange, required }) => (
  <StyledInput
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    required={required}
  />
);

FormInput.propTypes = {
  name: string.isRequired,
  placeholder: string,
  value: string,
  onChange: func.isRequired,
  required: bool
};

FormInput.defaultProps = {
  required: false
};

export default FormInput;
