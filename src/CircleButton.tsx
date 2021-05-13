import { CSSProperties, FC, MouseEvent } from 'react';
import Tooltip, { TooltipProps } from '@material-ui/core/Tooltip/Tooltip';
import styled, { StyledComponent } from 'styled-components';

const buttonStyles = `
  border: 0.2em solid #000000;
  color: #000000;
  border-radius: 50%;
  cursor: pointer;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0.5em;
  transition: all 0.5s;

  &:hover {
    color: #ffffff;
    background: #000000;
  }
`;

const StyledButton = styled.button`
  background: none;
  outline: none;
  ${buttonStyles}
`;

const StyledLink = styled.a.attrs<CircleButtonProps>(({ link, target }) => ({
  href: link,
  target
}))`${buttonStyles}`;

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
