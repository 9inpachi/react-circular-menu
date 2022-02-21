import React, { CSSProperties, FC, MouseEvent } from 'react';
import { StyledButton, StyledLink } from './StyledCircleButton';
import { Tooltip } from "../Tooltip/Tooltip"
import { TooltipPlacement } from '../Tooltip/library/types';

export interface CircleButtonProps {
  size: number;
  link?: string;
  tooltip?: string;
  tooltipPlacement?: TooltipPlacement;
  target?: string;
  className?: string;
  style?: CSSProperties;
  onClick?: (e?: MouseEvent<HTMLElement>) => void
};

export const CircleButton: FC<CircleButtonProps> = (props) => {
  const { link, target, tooltip, tooltipPlacement, onClick, className, size, style, children } = props;
  const commonProps = { className, size, style };

  return (
    <Tooltip title={tooltip ?? ''} placement={tooltipPlacement}>
      {link
        ? <StyledLink {...commonProps} href={link} target={target}>{children}</StyledLink>
        : <StyledButton
          {...commonProps}
          onClick={onClick}
        >
          {children}
        </StyledButton>}
    </Tooltip>
  );
};
