import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import DispatchContext from '../DispatchContext';
import { ActionType } from '../state/action-types';
interface HeaderProps {
  staticEmpty?: boolean;
}
function Header(props: HeaderProps) {
  const appDispatch = useContext(DispatchContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const isStatic = props.staticEmpty;

  function handleMenuClose() {
    setMenuOpen(false);
    appDispatch({ type: ActionType.CLOSE_SUB_MENU });
  }

  useEffect(() => {
    appDispatch({ type: 'flash-message', value: 'Welcome to my site!' });
  }, []);

  return (
    <>
      {menuOpen && <div className="overlay"></div>}

      <nav>
        <ul className={'menu' + (menuOpen ? ' active' : '')}>
          <li className="logo">
            {!isStatic && (
              <Link to="/" title="home">
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
                <>
                  <i className="fas fa-bars"></i>
                  <span className="hidden-accessibly">menu</span>
                </>
              )}
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
