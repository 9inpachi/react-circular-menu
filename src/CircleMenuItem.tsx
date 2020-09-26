import React, { MouseEvent } from 'react';
import { TooltipProps } from '@material-ui/core/Tooltip/Tooltip';
import { CircleButton } from './CircleButton';

export interface CircleMenuItemProps {
  data: any,
  size?: number,
  rotationAngle?: number,
  menuActive?: boolean,
  radius?: number,
  onClick?: (e: MouseEvent<HTMLElement>) => void,
  link?: string,
  tooltip?: string,
  tooltipPlacement?: TooltipProps['placement'],
  className?: string
};

export const CircleMenuItem: React.FC<CircleMenuItemProps> = ({
  radius = 1,
  size = 2,
  menuActive = false,
  rotationAngle = 0,
  ...props
}) => {

  const activeTransformStyle: string = `translateY(-50%) rotate(${rotationAngle}deg) translate(${radius}em) rotate(${-rotationAngle}deg)`;

  return (
    <CircleButton className={'circle-menu-item' + (props.className ? (' ' + props.className) : '')}
      tooltip={props.tooltip}
      onClick={props.onClick}
      tooltipPlacement={props.tooltipPlacement}
      size={size}
      link={props.link}
      style={{
        transform: menuActive ? activeTransformStyle : undefined
      }}>
      {React.cloneElement(props.data, { className: 'circle-menu-item-data' })}
    </CircleButton>
  );
};
