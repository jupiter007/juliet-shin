import React, { ReactNode, useEffect } from 'react';
import Container from './Container';

interface PageProps {
  title: string;
  children?: ReactNode;
}

function Page(props: PageProps) {
  useEffect(() => {
    document.title = `${props.title}|Juliet Shin`;
    window.scrollTo(0, 0);
  }, [props.title]);
  return <Container>{props.children}</Container>;
}

export default Page;
