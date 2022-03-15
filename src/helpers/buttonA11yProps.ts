import { HTMLAttributes } from "react";

export const buttonA11yProps = (
  onClick: () => void
): HTMLAttributes<HTMLDivElement> => ({
  role: "button",
  tabIndex: 0,
  onKeyPress: (keyboardEvent) => {
    if (["Enter", " ", "SpaceBar"].includes(keyboardEvent.key)) {
      keyboardEvent.preventDefault();
      onClick();
    }
  },
});
