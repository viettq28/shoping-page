import { createSlice } from '@reduxjs/toolkit';
import { logout } from './authReducer';

const cartReducer = createSlice({
  name: 'cart',
  initialState: {},
  reducers: {
    initCart: (state, action) => {
      return (state = action.payload);
    },
    addItem: (state, action) => {
      return (state = { ...state, [action.payload]: 1 });
    },
    updateItem: (state, action) => {
      return (state = { ...state, [action.payload.id]: action.payload.value });
    },
    deleteItem: (state, action) => {
      const { [action.payload]: deleted, ...newState } = state;
      return (state = newState);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logout, (state) => {
      return (state = {});
    });
  },
});

export const updateItem = ({id, update}) => {
  return (dispatch, getState) => {
    let updatedItem = getState().cart[id];
    if (update === 'increase') updatedItem++;
    if (update === 'decrease') updatedItem--;
    if (updatedItem <= 0) {
        dispatch({ type: 'cart/deleteItem', payload: id });
    } else {
        dispatch({
          type: 'cart/updateItem',
          payload: { id: id, value: updatedItem },
        });
    }
  };
};

export default cartReducer.reducer;

export const { initCart, addItem, deleteItem } = cartReducer.actions;
