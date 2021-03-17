import React, { memo, ReactElement } from 'react';
import './caption.scss';

interface IComponentProps {
  text: string;
  variant: 'big' | 'small';
}

const Caption = ({ text, variant = 'small' }: IComponentProps): ReactElement => (
  <p className={variant === 'big' ? 'caption-big' : 'caption-small'}>{text}</p>
);

export default memo(Caption);
