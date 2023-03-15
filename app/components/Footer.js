import React from 'react';

const Footer = () => {
  return (
    <footer className="border-top text-center small text-muted py-3">
      <p>
        <a href="/" className="mx-1 footer-link">
          Home
        </a>{' '}
        |
        <a className="mx-1 footer-link" href="/about-us">
          About Us
        </a>{' '}
        |
        <a className="mx-1 footer-link" href="/terms">
          Terms
        </a>
      </p>
      <p className="m-0">
        Copyright &copy; {new Date().getFullYear()}{' '}
        <a href="/" className="text-muted">
          WordSleuth
        </a>
        . All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
