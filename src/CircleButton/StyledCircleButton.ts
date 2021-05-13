import styled, { css } from 'styled-components';

interface Props {
  size: number;
}

export const StyledButtonWrapper = <T extends 'a' | 'button'>(tag: T) => styled(tag) <Props>`
  border: 0.2em solid #000000;
  background: none;
  color: #000000;
  border-radius: 50%;
  cursor: pointer;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0.5em;
  transition: all 0.5s;
  ${({ size }) =>
    css`
      width: ${size}em;
      height: ${size}em;
    `}

  &:hover {
    color: #ffffff;
    background: #000000;
  }
`;

export const StyledButton = StyledButtonWrapper('button');
export const StyledLink = StyledButtonWrapper('a');
