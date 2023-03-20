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
            <Link to="/">
              <img src="/public/dragonfly.png" height="60" alt="home" />
            </Link>
          </li>
          <li className="item">
            <Link to="/about" className="nav-link" onClick={handleMenuClose}>
              About Me
            </Link>
          </li>
          <li className="item">
            <Link to="/archives" className="nav-link" onClick={handleMenuClose}>
              Archives
            </Link>
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
