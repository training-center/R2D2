import React from 'react';
import { string, node } from 'prop-types';
import styled from 'styled-components';

const StyledField = styled.div`
  margin-bottom: 0.625rem;
`;
const StyledLabel = styled.label`
  color: #495057;
  display: block;
  font-size: 1.125rem;
  margin-bottom: 0.1875rem;
`;

const Field = ({ label, htmlFor, children }) => (
  <StyledField>
    {label && <StyledLabel htmlFor={htmlFor}>{label}</StyledLabel>}
    {children}
  </StyledField>
);

Field.propTypes = {
  label: string,
  htmlFor: string,
  children: node
};

export default Field;
