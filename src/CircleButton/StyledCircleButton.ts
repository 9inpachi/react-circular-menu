import styled from "styled-components";

interface Props {
  size: number;
}

export const StyledCircleButton = <T extends "a" | "button">(tag: T) => styled(
  tag
)<Props>`
  border: 0.2em solid #000000;
  background: none;
  text-decoration: none;
  color: #000000;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5em;
  transition: all 0.5s;
  ${({ size }) => `
    width: ${size}em;
    height: ${size}em;
  `}

  &:hover {
    color: #ffffff;
    background: #000000;
  }
`;

export const StyledButton = StyledCircleButton("button");
export const StyledLink = StyledCircleButton("a");
