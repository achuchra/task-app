import React, { memo, ReactElement } from 'react';

interface IComponentProps {
  text: string;
}

const Caption = ({ text }: IComponentProps): ReactElement => <p>{text}</p>;

export default memo(Caption);
