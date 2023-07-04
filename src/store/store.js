import { configureStore } from '@reduxjs/toolkit';

import authReducer from './authReducer';
import cartReducer from './cartReducer';

const storageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  const carts = JSON.parse(localStorage.getItem('CARTS')) || {};

  if (action.type === 'auth/login') {
    const id = action.payload.curCart;
    const curCart = carts?.[id] || {};
    // console.log(carts);
    // console.log(curCart);
    store.dispatch({type: 'cart/initCart', payload: curCart})
  }
  if (action.type.endsWith('Item')) {
    const cartItems = store.getState().cart;
    const curCart = store.getState().auth.curCart;
    const newCart = {...carts, [curCart]: cartItems}
    localStorage.setItem('CARTS', JSON.stringify(newCart));
  }
  return result;
}
const store = configureStore({
  reducer: { auth: authReducer, cart: cartReducer },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), storageMiddleware],
});


export default store;
