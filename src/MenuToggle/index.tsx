import React from 'react';
import CircleButton from '../CircleButton';
import './index.css';

interface Props {
  size: number,
  toggleMenu: () => void
}

const MenuToggle: React.FC<Props> = ({ size = 1, ...props }) => {
  return (
    <CircleButton
      onClick={props.toggleMenu}
      size={size}
      className="circle-menu-toggle"
    >
      <div className="circle-menu-burger">
        <span className="circle-menu-burger-bar"></span>
        <span className="circle-menu-burger-bar"></span>
        <span className="circle-menu-burger-bar"></span>
      </div>
    </CircleButton>
  );
};

export default MenuToggle;