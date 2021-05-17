import React, { FC } from "react";
import {
  StyledCircleMenuToggle,
  StyledCircleMenuBurgerBar,
} from "./StyledCircleMenuToggle";

interface Props {
  size: number;
  menuActive: boolean;
  toggleMenu: () => void;
}

export const CircleMenuToggle: FC<Props> = ({
  size = 1,
  menuActive = false,
  ...props
}) => {
  return (
    <StyledCircleMenuToggle
      onClick={props.toggleMenu}
      menuActive={menuActive}
      size={size}
    >
      <div>
        <StyledCircleMenuBurgerBar />
        <StyledCircleMenuBurgerBar />
        <StyledCircleMenuBurgerBar />
      </div>
    </StyledCircleMenuToggle>
  );
};
