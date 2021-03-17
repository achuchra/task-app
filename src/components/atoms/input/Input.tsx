import React, { ChangeEventHandler, memo, ReactElement } from 'react';
import './input.scss';

interface IComponentProps {
  name: string;
  type: string;
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const Input = ({ name, type, placeholder, onChange }: IComponentProps): ReactElement => {
  return <input className="input glass" name={name} type={type} placeholder={placeholder} onChange={onChange} />;
};

export default memo(Input);
