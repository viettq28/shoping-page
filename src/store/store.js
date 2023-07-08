import { configureStore } from '@reduxjs/toolkit';

import authReducer from './authReducer';
import cartReducer from './cartReducer';

// storageMiddleware để xử lý side effect đẩy vào localStorage
const storageMiddleware = (store) => (next) => (action) => {
  // Không cho người dùng làm việc với cart nếu chưa đăng nhập
  if (!store.getState().auth.curUser && !action.type.startsWith('auth')) {
    return null;
  }
  // Xử lý action, lấy carts từ localStorage
  const result = next(action);
  const carts = JSON.parse(localStorage.getItem('CARTS')) || {};
  // action.type === 'auth/login' thì dispatch action cart/initCart với payload là cart có id người dùng trong carts của localStorage
  if (action.type === 'auth/login') {
    const id = action.payload.curCart;
    const curCart = carts?.[id] || {};
    store.dispatch({ type: 'cart/initCart', payload: curCart });
  }
  // Khi action để thay đổi giá trị các product trong cart thì đồng thời cập nhật lại localStorage
  if (action.type.endsWith('Item')) {
    const cartItems = store.getState().cart;
    const curCart = store.getState().auth.curCart;
    const newCart = { ...carts, [curCart]: cartItems };
    localStorage.setItem('CARTS', JSON.stringify(newCart));
  }
  return result;
};
// Truyền 2 reducer auth và cart cho root reducer
const store = configureStore({
  reducer: { auth: authReducer, cart: cartReducer },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    storageMiddleware,
  ],
});

export default store;
