import React, { FC } from 'react';
import { CircleButtonProps } from '../CircleButton/CircleButton';
import { StyledCircleButton } from './StyledCircleMenuItem';

export interface CircleMenuItemProps extends Omit<CircleButtonProps, 'size'> {
  size?: number,
  radius?: number,
  menuActive?: boolean,
  rotationAngle?: number
};

export const CircleMenuItem: FC<CircleMenuItemProps> = ({
  size = 2,
  radius = 1,
  menuActive = false,
  rotationAngle = 0,
  children,
  ...props
}) => (
  <StyledCircleButton
    {...props}
    size={size}
    $radius={radius}
    menuActive={menuActive}
    rotationAngle={rotationAngle}
  >
    {children}
  </StyledCircleButton>
);
