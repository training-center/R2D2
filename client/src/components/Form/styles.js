import { css } from 'styled-components';

export const baseStyles = css`
  border: 1px solid #e0e0e0;
  border-radius: 0.25rem;
  color: #495057;
  display: block;
  font-size: 1.125rem;
  padding: 0.5rem 0.75rem;
  transition: border-color 0.3s ease-in-out;
  width: 100%;

  &:focus {
    border-color: #80bdff;
    outline: none;
  }

  &::placeholder {
    color: #e0e0e0;
  }
`;
