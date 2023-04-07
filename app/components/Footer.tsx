import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="content-wrap">
        <h2>Let's Keep in Touch!</h2>
        <ul className="contact-list">
          <li>
            <a href="mailto:prosody_laptop0r@icloud.com">Email</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/julietshin1/" target="_blank">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>

      <p>&copy; {new Date().getFullYear()} </p>
      <a
        href="https://www.flaticon.com/free-icons/dragonfly"
        title="dragonfly icons"
        rel="noopener"
        className="disclosure"
      >
        Dragonfly icons created by Roundicons Premium - Flaticon
      </a>
    </footer>
  );
};

export default Footer;
