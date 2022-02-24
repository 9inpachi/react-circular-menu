import styled, { css } from "styled-components";
import { mapPlacementToStyleProp } from "./functions/map-tooltip-placement";
import { TooltipPlacement } from "./library/types";

interface StyleTooltipProps {
  $placement?: TooltipPlacement;
}

export const StyledTooltip = styled.div<StyleTooltipProps>`
  position: absolute;
  display: none;
  pointer-events: none;
  background: #000000;
  border-radius: 0.3rem;
  color: #ffffff;
  padding: 0.25em 0.5em;

  ${({ $placement }) => mapPlacementToStyleProp($placement)}: 110%;

  ${({ $placement }) => {
    switch ($placement) {
      case TooltipPlacement.Top || TooltipPlacement.Bottom:
        return css`
          left: 50%;
          transform: translateX(-50%);
        `;
      case TooltipPlacement.Left || TooltipPlacement.Right:
        return css`
          top: 50%;
          transform: translateY(-50%);
        `;
    }
  }}
`;

export const StyledTooltipWrapper = styled.div`
  position: relative;
  display: inline-flex;

  &:hover > ${StyledTooltip} {
    display: unset;
  }
`;
