import React from 'react';
import classNames from 'classnames';

function Container(props) {
  const containerClasses = classNames('content-wrapper');
  return <main className={containerClasses}>{props.children}</main>;
}

export default Container;
