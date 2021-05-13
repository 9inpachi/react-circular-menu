import { FC } from 'react';
import { CircleButton, CircleButtonProps } from './CircleButton';

export interface CircleMenuItemProps extends CircleButtonProps {
  radius?: number,
  menuActive?: boolean,
  rotationAngle?: number
};

export const CircleMenuItem: FC<CircleMenuItemProps> = ({
  size = 2,
  radius = 1,
  menuActive = false,
  rotationAngle = 0,
  ...props
}) => {
  const activeTransformStyle: string = `translateY(-50%) rotate(${rotationAngle}deg) translate(${radius}em) rotate(${-rotationAngle}deg)`;

  return (
    <CircleButton {...props} className={'circle-menu-item' + (props.className ? (' ' + props.className) : '')}
      size={size}
      style={{
        transform: menuActive ? activeTransformStyle : undefined
      }}>
      {props.children}
    </CircleButton>
  );
};
