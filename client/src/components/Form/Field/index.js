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
const StyledHelper = styled.div`
  color: #a7a7a7;
  font-size: 0.75rem;
  margin-top: 0.3125rem;
`;

const Field = ({ label, htmlFor, children, helper }) => (
  <StyledField>
    {label && <StyledLabel htmlFor={htmlFor}>{label}</StyledLabel>}
    {children}
    {helper && <StyledHelper>{helper}</StyledHelper>}
  </StyledField>
);

Field.propTypes = {
  label: string,
  htmlFor: string,
  children: node,
  helper: string
};

export default Field;
