import { ReactElement } from "react";

export const getTooltipElementProps = (
  elementProps: ReactElement["props"],
  openTooltip: () => void,
  closeTooltip: () => void
) => {
  return {
    onMouseEnter: () => {
      elementProps.onMouseEnter?.();
      openTooltip();
    },
    onMouseLeave: () => {
      elementProps.onMouseLeave?.();
      closeTooltip();
    },
    onFocus: () => {
      elementProps.onFocus?.();
      openTooltip();
    },
    onBlur: () => {
      elementProps.onBlur?.();
      closeTooltip();
    },
  };
};
