import React, {
  Children,
  cloneElement,
  FC,
  ReactElement,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { Backdrop } from "../Backdrop/Backdrop";
import {
  CircleMenuItem,
  CircleMenuItemProps,
} from "../CircleMenuItem/CircleMenuItem";
import { CircleMenuToggle } from "../CircleMenuToggle/CircleMenuToggle";
import { StyledCircleMenuData } from "./StyledCircleMenu";

interface Props {
  startAngle: number;
  rotationAngle: number;
  rotationAngleInclusive?: boolean;
  radius?: number;
  itemSize?: number;
  className?: string;
  menuToggleElement?: ReactElement<{ onClick: () => void }>;
  menuToggleClassName?: string;
  onMenuToggle?: (toggleState: boolean) => void;
  open?: boolean;
  children: ReactNode;
}

export const CircleMenu: FC<Props> = ({
  rotationAngleInclusive = true,
  radius = 2,
  itemSize = 2,
  className,
  menuToggleElement,
  menuToggleClassName,
  onMenuToggle,
  open,
  ...props
}) => {
  const [menuActive, setMenuActive] = useState<boolean>(open ?? false);
  const childrenCount = Children.count(props.children);
  const itemCount = rotationAngleInclusive ? childrenCount - 1 : childrenCount;

  useEffect(() => setMenuActive(open ?? false), [open]);

  const toggleMenu = () => {
    const updatedMenuState = !menuActive;
    setMenuActive(updatedMenuState);
    onMenuToggle?.(updatedMenuState);
  };

  const menuToggle = menuToggleElement ? (
    cloneElement(menuToggleElement, {
      onClick: () => {
        menuToggleElement.props?.onClick?.();
        toggleMenu();
      },
    })
  ) : (
    <CircleMenuToggle
      className={menuToggleClassName}
      menuActive={menuActive}
      size={itemSize}
      toggleMenu={toggleMenu}
    />
  );

  return (
    <Backdrop className={className} active={menuActive} onClick={toggleMenu}>
      {menuToggle}
      <StyledCircleMenuData>
        {Children.map(props.children, (child, index: number) => {
          // Calculating angle
          let angle = props.startAngle;
          let increment = 0;
          if (childrenCount > 1) {
            increment = Math.round(props.rotationAngle / itemCount);
          }
          angle += index * increment;

          return (
            <CircleMenuItem
              key={"cm-item-" + index}
              {...(child as ReactElement<CircleMenuItemProps>).props}
              size={itemSize}
              menuActive={menuActive}
              radius={radius}
              rotationAngle={angle}
            />
          );
        })}
      </StyledCircleMenuData>
    </Backdrop>
  );
};
