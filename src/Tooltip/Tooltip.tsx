import React, {
  Children,
  cloneElement,
  CSSProperties,
  FC,
  isValidElement,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { useTooltipPosition } from "./functions/tooltip-position-hook";
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
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [tooltipElement, setTooltipElement] = useState<HTMLDivElement | null>(
    null
  );
  const tooltipStyles = useTooltipPosition(
    wrapperRef.current,
    tooltipElement,
    placement
  );

  useEffect(() => {
    if (isOpen && tooltipRef.current) {
      setTooltipElement(tooltipRef.current);
    }
  }, [isOpen, tooltipRef]);

  const openTooltip = () => !isOpen && setIsOpen(true);
  const closeTooltip = () => isOpen && setIsOpen(false);

  if (!title || !isValidElement(children)) {
    return <>{children}</>;
  }

  return (
    <StyledTooltipWrapper
      ref={wrapperRef}
      onMouseEnter={openTooltip}
      onMouseLeave={closeTooltip}
      onFocus={openTooltip}
      onBlur={closeTooltip}
    >
      {children}
      {isOpen &&
        createPortal(
          <StyledTooltip
            style={tooltipStyles}
            ref={tooltipRef}
            role="tooltip"
            $placement={placement}
          >
            {title}
          </StyledTooltip>,
          document.getElementsByTagName("body")[0]
        )}
    </StyledTooltipWrapper>
  );
};
