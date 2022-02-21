import styled from "styled-components";
import { mapPlacementToStyleProp } from "./functions/map-tooltip-placement";
import { TooltipPlacement } from "./library/types";
import { TooltipProps } from "./Tooltip";

export const StyledTooltip = styled.div<Pick<TooltipProps, "placement">>`
  position: absolute;
  display: none;
  pointer-events: none;
  background: #000000;
  border-radius: 3px;
  color: #ffffff;
  padding: 0.25em 0.5em;

  ${({ placement }) => mapPlacementToStyleProp(placement)}: 150%;

  ${({ placement }) => {
    switch (placement) {
      case TooltipPlacement.Top || TooltipPlacement.Bottom:
        return `
          left: 50%;
          transform: translateX(-50%);
        `;
      case TooltipPlacement.Left || TooltipPlacement.Right:
        return `
          top: 50%;
          transform: translateY(-50%);
        `;
    }
  }}
`;

export const StyledTooltipWrapper = styled.div`
  position: relative;
  display: inline-flex;

  &:hover ${StyledTooltip} {
    display: unset;
  }
`;
