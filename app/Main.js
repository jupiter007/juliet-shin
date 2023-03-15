import React from 'react';
import ReactDOM from 'react-dom/client';
import Axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useImmerReducer } from 'use-immer';
Axios.defaults.baseURL = process.env.BACKENDURL || '';

import StateContext from './StateContext';
import DispatchContext from './DispatchContext';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import FlashMessage from './components/FlashMessage';
import Portfolio from './components/Portfolio';

function Main() {
  const initialState = {
    flashMessages: [],
    isSubMenuOpen: false,
  };

  function useReducer(draft, action) {
    switch (action.type) {
      case 'flashMessage':
        draft.flashMessages.push(action.value);
        break;
      case 'openSubmenu':
        draft.isSubMenuOpen = true;
        break;
      case 'closeSubmenu':
        draft.isSubMenuOpen = false;
        break;
    }
  }

  const [state, dispatch] = useImmerReducer(useReducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <BrowserRouter>
          <FlashMessage />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

const root = ReactDOM.createRoot(document.querySelector('#app'));
root.render(<Main />);

if (module.hot) {
  module.hot.accept();
}
