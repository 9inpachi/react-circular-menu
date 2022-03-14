import { CSSProperties, RefObject, useEffect } from "react";
import { TooltipPlacement } from "../library/types";

const tooltipPadding = 5;

export const useTooltipPosition = (
  wrapper: HTMLDivElement | null,
  tooltip: HTMLDivElement | null,
  placement: TooltipPlacement
) => {
  let styles: CSSProperties = {};

  if (!wrapper || !tooltip) {
    return styles;
  }

  console.log(tooltip);

  const wrapperBoundingRect = wrapper.getBoundingClientRect();
  const wrapperWidth = wrapperBoundingRect.right - wrapperBoundingRect.left;
  const wrapperHeight = wrapperBoundingRect.bottom - wrapperBoundingRect.top;

  const tooltipBoundingRect = tooltip.getBoundingClientRect();
  const tooltipWidth = tooltipBoundingRect.right - tooltipBoundingRect.left;
  const tooltipHeight = tooltipBoundingRect.bottom - tooltipBoundingRect.top;

  const left = wrapperBoundingRect.left + wrapperWidth / 2 - tooltipWidth / 2;
  const top = wrapperBoundingRect.top + wrapperHeight / 2 - tooltipHeight / 2;

  styles = {
    transform: `translate3d(${left}px, ${top}px, 0px)`,
  };

  return styles;
};
