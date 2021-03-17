import React, { ReactElement, memo } from 'react';
import './button.scss';

interface IComponentProps {
  show: boolean;
  children: ReactElement | string;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
  fixed?: boolean;
}

const Button = ({ show, children, onClick, fixed = false }: IComponentProps): ReactElement => {
  return (
    <button
      type="button"
      className={`glass button ${fixed && 'button__fixed'} ${!show ? 'hidden' : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default memo(Button);
