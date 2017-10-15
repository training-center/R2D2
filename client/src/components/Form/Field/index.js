import React from 'react';
import { string, node } from 'prop-types';
import styled from 'styled-components';

const stateColor = {
  pristine: '#a7a7a7',
  valid: '#28a745',
  invalid: '#dc3545'
};

const StyledField = styled.div`
  margin-bottom: 0.625rem;
  width: 100%;
`;
const StyledLabel = styled.label`
  color: #495057;
  display: block;
  font-size: 1.125rem;
  margin-bottom: 0.1875rem;
`;
const StyledHelper = styled.div`
  color: ${props => stateColor[props.state]};
  font-size: 0.75rem;
  margin-top: 0.3125rem;
`;

const Field = ({ label, htmlFor, children, helper, state }) => (
  <StyledField>
    {label && <StyledLabel htmlFor={htmlFor}>{label}</StyledLabel>}
    {children}
    {helper && <StyledHelper state={state}>{helper}</StyledHelper>}
  </StyledField>
);

Field.propTypes = {
  label: string,
  htmlFor: string,
  children: node,
  helper: string,
  state: string
};

Field.defaultProps = {
  state: 'pristine'
};

export default Field;
