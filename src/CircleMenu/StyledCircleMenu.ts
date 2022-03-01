import styled from 'styled-components';

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

export const StyledCircleMenuData = styled.ul<StyleProps>`
  ${props => props.menuActive && 'z-index: 100;'};
  list-style-type: none;
  margin: 0;
  padding: 0;
`;
