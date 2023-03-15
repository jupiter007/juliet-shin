import React, { useEffect, useState, useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import StateContext from '../StateContext';
import DispatchContext from '../DispatchContext';

function Header() {
  const wrapperRef = useRef(null);
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);
  const [menuOpen, setMenuOpen] = useState(false);

  function handleMenuClose() {
    setMenuOpen(false);
    appDispatch({ type: 'closeSubmenu' });
  }

  function toggleSubMenu() {
    if (appState.isSubMenuOpen) {
      appDispatch({ type: 'closeSubmenu' });
    } else {
      appDispatch({ type: 'openSubmenu' });
    }
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        appDispatch({ type: 'closeSubmenu' });
      }
    }

    //Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef]);

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
            <Link to="/about" className="nav-link" onClick={handleMenuClose}>
              About Me
            </Link>
          </li>
          <li
            id="has-submenu"
            ref={wrapperRef}
            className={
              'item' + (appState.isSubMenuOpen ? ' submenu-active' : '')
            }
            onClick={toggleSubMenu}
          >
            <span className="submenu-container" tabIndex="0">
              Portfolio
              <ul className="submenu">
                <li className="subitem">
                  <Link
                    to="/portfolio"
                    className="nav-link"
                    onClick={handleMenuClose}
                  >
                    Older
                  </Link>
                </li>
                <li className="subitem">
                  <Link
                    to="/xoom-portfolio"
                    className="nav-link"
                    onClick={handleMenuClose}
                  >
                    Xoom
                  </Link>
                </li>
                <li className="subitem">
                  <Link
                    to="/paypal-portfolio"
                    className="nav-link"
                    onClick={handleMenuClose}
                  >
                    PayPal
                  </Link>
                </li>
              </ul>
            </span>
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
