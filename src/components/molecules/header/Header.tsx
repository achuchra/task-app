import React, { memo, ReactChild, ReactElement } from 'react';
import './header.scss';

interface IComponentProps {
  children: ReactChild;
}

const Header = ({ children }: IComponentProps): ReactElement => <header className="header glass">{children}</header>;

export default memo(Header);
