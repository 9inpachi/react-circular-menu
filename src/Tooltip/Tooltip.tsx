import React, {
  Children,
  cloneElement,
  FC,
  isValidElement,
  ReactNode,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { getTooltipElementProps } from "./functions/tooltip-element-props";
import { useTooltipTransform } from "./functions/tooltip-transform-hook";
import { TooltipPlacement } from "./library/types";
import { StyledTooltip } from "./StyledTooltip";

export interface TooltipProps {
  title: string;
  placement?: TooltipPlacement;
  children: ReactNode;
}

export const Tooltip: FC<TooltipProps> = ({
  title,
  placement = TooltipPlacement.Top,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [tooltip, setTooltip] = useState<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const tooltipStyles = useTooltipTransform(
    wrapperRef.current,
    tooltip,
    placement
  );

  const openTooltip = () => !isOpen && setIsOpen(true);
  const closeTooltip = () => isOpen && setIsOpen(false);

  if (!title || !isValidElement(children)) {
    return <>{children}</>;
  }

  return (
    <div ref={wrapperRef}>
      <>
        {cloneElement(
          Children.only(children),
          getTooltipElementProps(children.props, openTooltip, closeTooltip)
        )}
        {isOpen &&
          createPortal(
            <StyledTooltip
              style={tooltipStyles}
              ref={(element: HTMLDivElement) => element && setTooltip(element)}
              role="tooltip"
            >
              {title}
            </StyledTooltip>,
            document.getElementsByTagName("body")[0]
          )}
      </>
    </div>
  );
};
