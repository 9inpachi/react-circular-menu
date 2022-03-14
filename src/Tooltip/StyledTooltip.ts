import styled from "styled-components";
import { TooltipPlacement } from "./library/types";

interface StyleTooltipProps {
  $placement?: TooltipPlacement;
}

export const StyledTooltip = styled.div<StyleTooltipProps>`
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  background: #000000;
  border-radius: 0.3rem;
  color: #ffffff;
  padding: 0.25em 0.5em;
  z-index: 102;
`;

export const StyledTooltipWrapper = styled.div`
  position: relative;
`;
