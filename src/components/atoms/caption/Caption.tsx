import React, { memo, ReactElement } from 'react';
import './caption.scss';

interface IComponentProps {
  text: string;
  variant?: 'big' | 'small';
}

const Caption = ({ text, variant = 'small' }: IComponentProps): ReactElement => (
  <p className={`caption ${variant === 'big' ? 'caption__big' : 'caption__small'}`}>{text}</p>
);

export default memo(Caption);
