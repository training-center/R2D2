import React from 'react';
import { bool, func, string } from 'prop-types';
import styled from 'styled-components';
import { baseInputStyles } from '../styles';

const StyledInput = styled.input`
  ${baseInputStyles};
`;

const FormInput = ({
  id,
  name,
  placeholder,
  value,
  onChange,
  required,
  state
}) => (
  <StyledInput
    id={id || name}
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    required={required}
    state={state}
  />
);

FormInput.propTypes = {
  id: string,
  name: string.isRequired,
  placeholder: string,
  value: string,
  onChange: func.isRequired,
  required: bool,
  state: string
};

FormInput.defaultProps = {
  required: false,
  onChange: () => {},
  state: 'pristine'
};

export default FormInput;
