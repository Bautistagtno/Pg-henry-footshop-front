import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../Reducer/index';
'hola'
'hola'
'hola'
'hola'
'hola'
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))