import React, { ReactElement } from 'react';
import './grid-template.scss';

interface IComponentProps {
  children: ReactElement[];
}

const GridTemplate = ({ children }: IComponentProps): ReactElement => {
  return <div className="grid-template">{children}</div>;
};

export default GridTemplate;
