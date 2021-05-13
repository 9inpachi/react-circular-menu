import styled, { css } from "styled-components";

interface StyleProps {
  menuActive: boolean;
}

export const StyledCircleMenu = styled.div`
  position: relative;
`;

export const StyledCircleBackdrop = styled.div<StyleProps>`
  display: none;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;

  ${(props) =>
    props.menuActive &&
    css`
      display: block;
      z-index: 99;
    `}
`;

export const StyledCircleMenuData = styled.div<StyleProps>`
  ${(props) =>
    props.menuActive &&
    css`
      z-index: 100;
    `}
`;
