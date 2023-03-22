import { createContext } from 'react';
import { Action } from './state/actions';
import { Dispatch } from 'react';

const DispatchContext = createContext((() => {}) as Dispatch<Action>);

export default DispatchContext;
