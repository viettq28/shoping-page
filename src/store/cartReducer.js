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
      let updatedItem = state[action.payload.id];
      if (action.payload.update === 'increase') updatedItem++;
      if (action.payload.update === 'decrease') updatedItem--;
      return (state = { ...state, [action.payload.id]: updatedItem});
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


export default cartReducer.reducer;

export const { initCart, addItem, deleteItem, updateItem } = cartReducer.actions;
