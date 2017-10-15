import React from 'react';
import { bool, func, string } from 'prop-types';
import styled from 'styled-components';
import { baseInputStyles } from '../styles';

const StyledTextarea = styled.textarea`
  ${baseInputStyles};
  overflow: auto;
  resize: vertical;
`;

const FormTextarea = ({
  id,
  name,
  placeholder,
  value,
  onChange,
  required,
  state
}) => (
  <StyledTextarea
    id={id || name}
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    required={required}
    state={state}
  />
);

FormTextarea.propTypes = {
  id: string,
  name: string.isRequired,
  placeholder: string,
  value: string,
  onChange: func.isRequired,
  required: bool,
  state: string
};

FormTextarea.defaultProps = {
  required: false,
  onChange: () => {},
  state: 'pristine'
};

export default FormTextarea;
