import React, { memo, ReactChild, ReactElement } from 'react';

interface IComponentProps {
  children: ReactChild;
}

const Header = ({ children }: IComponentProps): ReactElement => <header>{children}</header>;

export default memo(Header);
