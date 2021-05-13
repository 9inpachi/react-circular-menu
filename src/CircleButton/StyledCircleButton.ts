import styled from "styled-components";
import { CircleButtonProps } from "./CircleButton";

const buttonStyles = `
  border: 0.2em solid #000000;
  color: #000000;
  border-radius: 50%;
  cursor: pointer;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0.5em;
  transition: all 0.5s;

  &:hover {
  color: #ffffff;
  background: #000000;
  }
`;

export const StyledButton = styled.button`
  background: none;
  outline: none;
  ${buttonStyles}
`;

export const StyledLink = styled.a.attrs<CircleButtonProps>(
  ({ link, target }) => ({
    href: link,
    target,
  })
)`
  ${buttonStyles}
`;
