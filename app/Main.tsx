import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useImmerReducer } from 'use-immer';

import StateContext from './StateContext';
import DispatchContext from './DispatchContext';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import FlashMessage from './components/FlashMessage';
import Archives from './components/Archives';
import About from './components/About';

import { Action } from './state/actions';

function Main() {
  const initialState = {
    flashMessages: [],
    isSubMenuOpen: false,
  };

  interface DraftState {
    flashMessages: string[];
    isSubMenuOpen: boolean;
  }

  function useReducer(draft: DraftState, action: Action) {
    switch (action.type) {
      case 'flash-message':
        draft.flashMessages.push(action.value);
        break;
      case 'open-submenu':
        draft.isSubMenuOpen = true;
        break;
      case 'close-submenu':
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
            <Route path="/archives" element={<Archives />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

const root = ReactDOM.createRoot(document.querySelector('#app') as HTMLElement);
root.render(<Main />);

if (module.hot) {
  module.hot.accept();
}
