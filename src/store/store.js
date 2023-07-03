import { configureStore } from '@reduxjs/toolkit';

import authReducer from './authReducer';
import cartReducer from './cartReducer';

const storageMiddleware = (store) => (next) => (action) => {
  if (action.type === 'auth/login') {
    const id = action.payload.curCart;
    const curCart = JSON.parse(localStorage.getItem('CARTS'))?.[id] || {};
    store.dispatch({type: 'cart/initCart', payload: curCart})
  }
  if (action.type.endsWith('Item')) {
    console.log(action);
    console.log(store.getState());
  }
  return next(action);
}
const store = configureStore({
  reducer: { auth: authReducer, cart: cartReducer },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), storageMiddleware],
});


export default store;
