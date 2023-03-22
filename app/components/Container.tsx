import React, { ReactNode } from 'react';
import classNames from 'classnames';

interface ContainerProps {
  children: ReactNode;
}
function Container(props: ContainerProps) {
  const containerClasses = classNames('content-wrapper');
  return <main className={containerClasses}>{props.children}</main>;
}

export default Container;
