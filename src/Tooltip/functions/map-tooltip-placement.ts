import { TooltipPlacement } from "../library/types";

export const mapPlacementToStyleProp = (
  placement: TooltipPlacement = TooltipPlacement.Top
) => {
  switch (placement) {
    case TooltipPlacement.Top:
      return "bottom";
    case TooltipPlacement.Bottom:
      return "top";
    case TooltipPlacement.Left:
      return "right";
    case TooltipPlacement.Right:
      return "left";
  }
};
