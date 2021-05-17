import React, { Children, FC, ReactElement, useState } from 'react';
import { CircleMenuItem, CircleMenuItemProps } from '../CircleMenuItem/CircleMenuItem';
import { CircleMenuToggle } from '../CircleMenuToggle/CircleMenuToggle';
import { StyledCircleBackdrop, StyledCircleMenu, StyledCircleMenuData } from './StyledCircleMenu';

interface Props {
  startAngle: number,
  rotationAngle: number,
  rotationAngleInclusive?: boolean,
  radius?: number,
  itemSize?: number
}

export const CircleMenu: FC<Props> = ({
  rotationAngleInclusive = true,
  radius = 2,
  itemSize = 2,
  ...props
}) => {

  const [menuActive, setMenuActive] = useState<boolean>(false);

  const childrenCount = Children.count(props.children);
  const itemCount = rotationAngleInclusive ? childrenCount - 1 : childrenCount;

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <StyledCircleMenu>
      <StyledCircleBackdrop menuActive={menuActive} onClick={toggleMenu} />
      <CircleMenuToggle menuActive={menuActive} size={itemSize} toggleMenu={toggleMenu} />
      <StyledCircleMenuData menuActive={menuActive}>
        {Children.map(props.children, (child, index: number) => {
          // Calculating angle
          let angle = props.startAngle;
          let increment = 0;
          if (childrenCount > 1) {
            increment = Math.round(props.rotationAngle / itemCount);
          }
          angle += index * increment;

          return <CircleMenuItem
            key={'cm-item-' + index}
            {...(child as ReactElement<CircleMenuItemProps>).props}
            size={itemSize}
            menuActive={menuActive}
            radius={radius}
            rotationAngle={angle}
          />;
        })}
      </StyledCircleMenuData>
    </StyledCircleMenu>
  );
};
