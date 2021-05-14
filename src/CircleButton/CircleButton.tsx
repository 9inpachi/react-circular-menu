import { CSSProperties, FC, MouseEvent } from 'react';
import Tooltip, { TooltipProps } from '@material-ui/core/Tooltip/Tooltip';
import { StyledButton, StyledLink } from './StyledCircleButton';
import { clickA11yProps } from '../helpers/clickA11y';

export interface CircleButtonProps {
  size: number;
  link?: string;
  tooltip?: string;
  tooltipPlacement?: TooltipProps['placement'];
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
          {...(onClick ? clickA11yProps(onClick) : undefined)}
        >
          {children}
        </StyledButton>}
    </Tooltip>
  );
};
