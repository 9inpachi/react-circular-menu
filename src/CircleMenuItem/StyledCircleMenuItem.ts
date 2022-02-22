import styled from "styled-components";
import { CircleButton } from "../CircleButton/CircleButton";

interface Props {
  menuActive: boolean;
  rotationAngle: number;
  $radius: number;
}

export const StyledCircleButton = styled(CircleButton)<Props>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #ffffff;
  visibility: hidden;
  opacity: 0;
  z-index: 100;

  ${({ menuActive, rotationAngle, $radius }) =>
    menuActive && `
      transform: translateY(-50%) rotate(${rotationAngle}deg)
        translate(${$radius}rem) rotate(${-rotationAngle}deg);
      visibility: visible;
      opacity: 1;
    `}
`;
