import React, { useEffect } from 'react';
import classNames from 'classnames';

function Container(props) {
  const containerClasses = classNames('content-wrapper', {
    'container--narrow': !props.wide,
  });
  return <main className={containerClasses}>{props.children}</main>;
}

export default Container;
