import React, { ReactElement, useState } from 'react';
import { CircleMenuItem, CircleMenuItemProps } from './CircleMenuItem';
import { CircleMenuToggle } from './CircleMenuToggle';

interface Props {
  startAngle: number,
  rotationAngle: number,
  radius?: number,
  itemSize?: number
}

export const CircleMenu: React.FC<Props> = ({ radius = 2, itemSize = 2, ...props }) => {

  const [menuActive, setMenuActive] = useState<boolean>(false);

  const childrenCount = React.Children.count(props.children);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className={'circle-menu' + (menuActive ? ' circle-menu-active' : '')}>
      <div className='circle-menu-backdrop' onClick={toggleMenu}></div>
      <CircleMenuToggle size={itemSize} toggleMenu={toggleMenu} />
      <div className='circle-menu-data'>
        {React.Children.map(props.children, (child, index: number) => {
          // Calculating angle
          let angle = props.startAngle;
          let increment = 0;
          if (childrenCount > 1) {
            increment = Math.round(props.rotationAngle / childrenCount);
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
      </div>
    </div>
  );
};
