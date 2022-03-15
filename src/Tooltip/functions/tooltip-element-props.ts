import { DOMAttributes, ReactElement } from "react";

export const getTooltipElementProps = <T>(
  elementProps: ReactElement["props"],
  openTooltip: () => void,
  closeTooltip: () => void
): DOMAttributes<T> => ({
  onMouseEnter: (event) => {
    openTooltip();
    elementProps.onMouseEnter?.(event);
  },
  onMouseLeave: (event) => {
    closeTooltip();
    elementProps.onMouseLeave?.(event);
  },
  onFocus: (event) => {
    openTooltip();
    elementProps.onFocus?.(event);
  },
  onBlur: (event) => {
    closeTooltip();
    elementProps.onBlur?.(event);
  },
  onTouchStart: (event) => {
    openTooltip();
    elementProps.onTouchStart?.(event);
  },
  onTouchEnd: (event) => {
    closeTooltip();
    elementProps.onTouchEnd?.(event);
  },
});
