import { createContext } from 'react';

interface StateContext {
  flashMessages: string[];
  isSubMenuOpen: Boolean;
}
const initialState = {
  flashMessages: [],
  isSubMenuOpen: false,
};
const StateContext = createContext<StateContext>(initialState);

export default StateContext;
