import React from 'react';
import { bool, func, string, node } from 'prop-types';
import styled from 'styled-components';
import { baseInputStyles } from '../styles';

const StyledSelect = styled.select`
  ${baseInputStyles};
  height: 2.4375rem;
`;

const FormSelect = ({
  id,
  name,
  placeholder,
  value,
  onChange,
  required,
  children,
  state
}) => (
  <StyledSelect
    id={id || name}
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    required={required}
    state={state}
  >
    {placeholder && (
      <option value="" disabled selected hidden>
        {placeholder}
      </option>
    )}
    {children}
  </StyledSelect>
);

FormSelect.propTypes = {
  id: string,
  name: string.isRequired,
  placeholder: string,
  value: string,
  onChange: func.isRequired,
  required: bool,
  children: node.isRequired,
  state: string
};

FormSelect.defaultProps = {
  required: false,
  onChange: () => {},
  state: 'pristine'
};

export default FormSelect;
