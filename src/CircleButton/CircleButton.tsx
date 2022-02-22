import React, { CSSProperties, FC, MouseEvent } from "react";
import { StyledButton, StyledLink } from "./StyledCircleButton";
import Tooltip, { TooltipProps } from "@material-ui/core/Tooltip/Tooltip";

export interface CircleButtonProps {
  size: number;
  link?: string;
  tooltip?: string;
  tooltipPlacement?: TooltipProps["placement"];
  target?: string;
  className?: string;
  style?: CSSProperties;
  onClick?: (e?: MouseEvent<HTMLElement>) => void;
}

export const CircleButton: FC<CircleButtonProps> = (props) => {
  const {
    link,
    target,
    tooltip,
    tooltipPlacement,
    onClick,
    size,
    ...commonProps
  } = props;

  return (
    <Tooltip title={tooltip ?? ""} placement={tooltipPlacement}>
      {link ? (
        <StyledLink {...commonProps} $size={size} href={link} target={target} />
      ) : (
        <StyledButton {...commonProps} $size={size} onClick={onClick} />
      )}
    </Tooltip>
  );
};
