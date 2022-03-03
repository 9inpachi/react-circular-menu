import React, { Children, cloneElement, FC, isValidElement } from "react";
import { TooltipPlacement } from "./library/types";
import { StyledTooltipWrapper, StyledTooltip } from "./StyledTooltip";

export interface TooltipProps {
  title: string;
  placement?: TooltipPlacement;
}

export const Tooltip: FC<TooltipProps> = ({
  title,
  placement = TooltipPlacement.Top,
  children,
}) => {
  return title && isValidElement(children) ? (
    <StyledTooltipWrapper>
      {cloneElement(Children.only(children), {
        className: (children.props.className ? " " : "") + "tooltip-element",
      })}
      <StyledTooltip role="tooltip" $placement={placement}>
        {title}
      </StyledTooltip>
    </StyledTooltipWrapper>
  ) : (
    <>{children}</>
  );
};
