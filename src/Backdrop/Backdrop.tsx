import React, { FC } from "react";
import { StyledBackdrop, StyledBackdropFocus } from "./StyledBackdrop";

export interface BackdropProps {
  className?: string;
  active: boolean;
  onClick: () => void;
}

export const Backdrop: FC<BackdropProps> = (props) => (
  <>
    {props.active && <StyledBackdrop onClick={props.onClick} />}
    <StyledBackdropFocus className={props.className}>
      {props.children}
    </StyledBackdropFocus>
  </>
);
