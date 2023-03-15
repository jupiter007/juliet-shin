import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubMenuOpen] = useState(false);

  function handleMenuClose() {
    setMenuOpen(false);
    setSubMenuOpen(false);
  }

  function toggleSubMenu() {
    setSubMenuOpen(!submenuOpen);
  }

  return (
    <>
      {menuOpen && <div className="overlay"></div>}

      <nav>
        <ul className={'menu' + (menuOpen ? ' active' : '')}>
          <li className="logo">
            <a href="#">
              Juliet Shin <i className="fa-solid fa-magnifying-glass"></i>
            </a>
          </li>
          <li className="item">
            <Link to="/about" onClick={handleMenuClose}>
              About Me
            </Link>
          </li>
          <li
            className={
              'item has-submenu' + (submenuOpen ? ' submenu-active' : '')
            }
            onClick={toggleSubMenu}
          >
            <a tabIndex="0">
              Portfolio
              <ul className="submenu">
                <li className="subitem">
                  <Link to="/portfolio" onClick={handleMenuClose}>
                    Older
                  </Link>
                </li>
                <li className="subitem">
                  <Link to="/xoom-portfolio" onClick={handleMenuClose}>
                    Xoom
                  </Link>
                </li>
                <li className="subitem">
                  <Link to="/paypal-portfolio" onClick={handleMenuClose}>
                    PayPal
                  </Link>
                </li>
              </ul>
            </a>
          </li>
          <li className="toggle" onClick={() => setMenuOpen(!menuOpen)}>
            <a href="#">
              {menuOpen ? (
                <i className="fas fa-times"></i>
              ) : (
                <i className="fas fa-bars"></i>
              )}
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
