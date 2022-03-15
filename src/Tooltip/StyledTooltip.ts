import styled from "styled-components";

export const StyledTooltip = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  background: #000000;
  border-radius: 0.3rem;
  color: #ffffff;
  padding: 0.25rem 0.5rem 0.3rem 0.5rem;
  z-index: 104;
`;

export const StyledTooltipWrapper = styled.div`
  position: relative;
`;
