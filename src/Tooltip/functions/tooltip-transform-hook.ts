import { CSSProperties, useMemo } from "react";
import { TooltipPlacement } from "../library/types";

const tooltipPadding = 5;

export const useTooltipTransform = (
  wrapper: HTMLDivElement | null,
  tooltip: HTMLDivElement | null,
  placement: TooltipPlacement
): CSSProperties => {
  const calculateTransformStyle = (): CSSProperties => {
    if (!wrapper || !tooltip) {
      return {};
    }

    const wrapperBoundingRect = wrapper.getBoundingClientRect();
    const wrapperWidth = wrapperBoundingRect.right - wrapperBoundingRect.left;
    const wrapperHeight = wrapperBoundingRect.bottom - wrapperBoundingRect.top;

    const tooltipBoundingRect = tooltip.getBoundingClientRect();
    const tooltipWidth = tooltipBoundingRect.right - tooltipBoundingRect.left;
    const tooltipHeight = tooltipBoundingRect.bottom - tooltipBoundingRect.top;

    let left = wrapperBoundingRect.left + wrapperWidth / 2 - tooltipWidth / 2;
    let top = wrapperBoundingRect.top + wrapperHeight / 2 - tooltipHeight / 2;

    switch (placement) {
      case TooltipPlacement.Top:
        top = wrapperBoundingRect.top - tooltipHeight - tooltipPadding;
        break;
      case TooltipPlacement.Bottom:
        top = wrapperBoundingRect.bottom + tooltipPadding;
        break;
      case TooltipPlacement.Left:
        left = wrapperBoundingRect.left - tooltipWidth - tooltipPadding;
        break;
      case TooltipPlacement.Right:
        left = wrapperBoundingRect.right + tooltipPadding;
        break;
    }

    return {
      transform: `translate3d(${left}px, ${top}px, 0px)`,
    };
  };

  return useMemo(() => calculateTransformStyle(), [wrapper, tooltip]);
};
