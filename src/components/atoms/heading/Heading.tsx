import React, { memo, ReactText, ReactElement } from 'react';

interface IComponentProps {
  text: ReactText;
}

const Heading = ({ text }: IComponentProps): ReactElement => {
  return <h2>{text}</h2>;
};

export default memo(Heading);
