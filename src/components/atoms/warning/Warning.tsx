import React, { ReactElement } from 'react';
import './warning.scss';

interface IComponentProps {
  text: string;
}

const Warning = ({ text }: IComponentProps): ReactElement => <div className="warning glass">{text}</div>;

export default Warning;
