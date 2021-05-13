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
  const { link, tooltip, tooltipPlacement, onClick, className, size, style, children } = props;
  const ButtonTag: StyledComponent<'a' | 'button', any> = link ? StyledLink : StyledButton;

  return (
    <Tooltip title={tooltip ?? ''} placement={tooltipPlacement}>
      <ButtonTag
        onClick={onClick}
        className={className}
        style={{
          width: size + 'em',
          height: size + 'em',
          ...style
        }}>
        {children}
      </ButtonTag>
    </Tooltip>
  );
};
