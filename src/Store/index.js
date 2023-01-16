import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../Reducer/index';

const cartFromLocalStorage = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];

// const inicialState = {
//     rootReducer: {cart : cartFromLocalStorage}
// }

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))