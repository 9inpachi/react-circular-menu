import React, { FC } from "react";
import { TooltipPlacement } from "./library/types";
import { StyledTooltipWrapper, StyledTooltip } from "./StyledTooltip";

export interface TooltipProps {
  title: string;
  placement?: TooltipPlacement;
}

export const Tooltip: FC<TooltipProps> = ({ title, placement, children }) => {
  return (
    <StyledTooltipWrapper>
      <StyledTooltip role="tooltip" placement={placement}>
        {title}
      </StyledTooltip>
      {children}
    </StyledTooltipWrapper>
  );
};
