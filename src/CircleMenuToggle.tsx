import { FC } from 'react';
import { CircleButton } from './CircleButton';

interface Props {
  size: number,
  toggleMenu: () => void
}

export const CircleMenuToggle: FC<Props> = ({ size = 1, ...props }) => {
  return (
    <CircleButton
      onClick={props.toggleMenu}
      size={size}
      className='circle-menu-toggle'
    >
      <div className='circle-menu-burger'>
        <span className='circle-menu-burger-bar'></span>
        <span className='circle-menu-burger-bar'></span>
        <span className='circle-menu-burger-bar'></span>
      </div>
    </CircleButton>
  );
};
