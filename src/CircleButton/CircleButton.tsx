import { CSSProperties, FC, MouseEvent } from 'react';
import Tooltip, { TooltipProps } from '@material-ui/core/Tooltip/Tooltip';
import { StyledComponent } from 'styled-components';
import { StyledButton, StyledLink } from './StyledCircleButton';

export interface CircleButtonProps {
  size: number,
  link?: string,
  tooltip?: string,
  tooltipPlacement?: TooltipProps['placement'],
  target?: string,
  className?: string,
  style?: CSSProperties,
  onClick?: (e: MouseEvent<HTMLElement>) => void
};

export const CircleButton: FC<CircleButtonProps> = (props) => {
  const { link, target, tooltip, tooltipPlacement, onClick, className, size, style, children } = props;
  const ButtonTag: StyledComponent<any, any> = link ? StyledLink : StyledButton;

  return (
    <Tooltip title={tooltip ?? ''} placement={tooltipPlacement}>
      <ButtonTag
        href={link}
        target={target}
        onClick={onClick}
        className={className}
        size={size}
        style={style}
      >
        {children}
      </ButtonTag>
    </Tooltip>
  );
};
