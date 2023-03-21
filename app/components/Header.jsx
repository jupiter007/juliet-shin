import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import DispatchContext from '../DispatchContext';

function Header(props) {
  const appDispatch = useContext(DispatchContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const isStatic = props.staticEmpty;

  function handleMenuClose() {
    setMenuOpen(false);
    appDispatch({ type: 'closeSubmenu' });
  }

  return (
    <>
      {menuOpen && <div className="overlay"></div>}

      <nav>
        <ul className={'menu' + (menuOpen ? ' active' : '')}>
          <li className="logo">
            {!isStatic && (
              <Link to="/">
                <img src="/public/dragonfly.png" height="60" alt="home" />
              </Link>
            )}
            {isStatic && <div className="nav-link">Juliet Shin</div>}
          </li>
          {!isStatic && (
            <li className="item">
              <Link to="/about" className="nav-link" onClick={handleMenuClose}>
                About Me
              </Link>
            </li>
          )}
          {!isStatic && (
            <li className="item">
              <Link
                to="/archives"
                className="nav-link"
                onClick={handleMenuClose}
              >
                Archives
              </Link>
            </li>
          )}
          {menuOpen && (
            <li className="item">
              <Link to="/" className="nav-link" onClick={handleMenuClose}>
                Home
              </Link>
            </li>
          )}
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
