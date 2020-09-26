import React, { MouseEvent } from 'react';
import { TooltipProps } from '@material-ui/core/Tooltip/Tooltip';
import CircleButton from '../CircleButton';
import './index.css';

export interface MenuItemProps {
  size: number,
  icon: any,
  rotationAngle: number,
  menuActive: boolean,
  radius?: number,
  onClick?: (e: MouseEvent<HTMLElement>) => void,
  link?: string,
  tooltip?: string,
  tooltipPlacement?: TooltipProps['placement'],
  className?: string
};

const MenuItem: React.FC<MenuItemProps> = ({ radius = 1, ...props }) => {

  const activeTransformStyle: string = `translateY(-50%) rotate(${props.rotationAngle}deg) translate(${radius}em) rotate(${-props.rotationAngle}deg)`;

  return (
    <CircleButton className={'circle-menu-item' + (props.className ? (' ' + props.className) : '')}
      tooltip={props.tooltip}
      onClick={props.onClick}
      tooltipPlacement={props.tooltipPlacement}
      size={props.size}
      link={props.link}
      style={{
        transform: props.menuActive ? activeTransformStyle : undefined
      }}>
      {React.cloneElement(props.icon, { className: 'circle-menu-item-icon' })}
    </CircleButton>
  );
};

export default MenuItem;