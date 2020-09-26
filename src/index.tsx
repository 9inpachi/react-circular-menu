import React, { ReactElement, useState } from 'react';
import MenuItem, { MenuItemProps } from './MenuItem';
import MenuToggle from './MenuToggle';
import './index.css';

interface Props {
  minAngle: number,
  maxAngle: number,
  radius: number,
  itemSize: number,
  children: ReactElement<MenuItemProps>
}

export const CircleMenu: React.FC<Props> = (props) => {

  const [menuActive, setMenuActive] = useState<boolean>(false);

  const childrenCount = React.Children.count(props.children);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  }

  return (
    <div className='circle-menu'>
      <div className="circle-menu-backdrop" onClick={toggleMenu}></div>
      <MenuToggle size={props.itemSize} toggleMenu={toggleMenu} />
      {React.Children.map(props.children, (child: ReactElement<MenuItemProps>, index: number) => {
        // Calculating angle
        let angle = props.minAngle;
        let increment = 0;
        if (childrenCount > 1) {
          increment = Math.round(props.maxAngle / (childrenCount - 1));
        }
        angle += index * increment;

        return <MenuItem {...child.props}
          size={props.itemSize}
          menuActive={menuActive}
          radius={props.radius}
          rotationAngle={angle} />;
      })}
    </div>
  );
};

export default CircleMenu;