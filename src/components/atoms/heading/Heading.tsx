import React, { memo, ReactText, ReactElement } from 'react';
import './heading.scss';

interface IComponentProps {
  text: ReactText;
}

const Heading = ({ text }: IComponentProps): ReactElement => {
  return <h2 className="heading">{text}</h2>;
};

export default memo(Heading);
