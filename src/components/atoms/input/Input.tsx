import React, { ChangeEventHandler, memo, ReactElement } from 'react';
import './input.scss';

interface IComponentProps {
  onChange: ChangeEventHandler<HTMLInputElement>;
  type: string;
  name?: string;
  placeholder?: string;
}

const Input = ({ onChange, type, name = '', placeholder = '' }: IComponentProps): ReactElement => {
  return <input className="input glass" name={name} type={type} placeholder={placeholder} onChange={onChange} />;
};

export default memo(Input);
