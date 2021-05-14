import styled, { css } from 'styled-components';

interface StyleProps {
  menuActive: boolean;
}

export const StyledCircleMenu = styled.div`
  position: relative;
`;

export const StyledCircleBackdrop = styled.div<StyleProps>`
  display: ${props => props.menuActive ? 'block' : 'none'};
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  z-index: 99;
`;

export const StyledCircleMenuData = styled.div<StyleProps>`
  z-index:${props => props.menuActive && '100'}
`;
