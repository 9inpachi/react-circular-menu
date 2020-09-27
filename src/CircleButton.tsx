import React, { CSSProperties, MouseEvent } from 'react';
import Tooltip, { TooltipProps } from '@material-ui/core/Tooltip/Tooltip';

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

export const CircleButton: React.FC<CircleButtonProps> = (props) => {
  const ButtonTag = props.link ? 'a' : 'div';

  return (
    <Tooltip title={props.tooltip ? props.tooltip : ''}
      placement={props.tooltipPlacement}>
      <ButtonTag href={props.link}
        target={props.target}
        onClick={props.onClick}
        className={'circle-button' + (props.className ? ' ' + props.className : '')}
        style={{
          width: props.size + 'em',
          height: props.size + 'em',
          ...props.style,
        }}>
        {props.children}
      </ButtonTag>
    </Tooltip>
  );
};
