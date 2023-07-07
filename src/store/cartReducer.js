import { createSlice } from '@reduxjs/toolkit';
import { logout } from './authReducer';

const cartReducer = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    initCart: (state, action) => {
      return state = action.payload;
    },
    addItem: (state, action) => {
      return (state = {...state, [action.payload.id]: action.payload.value});
    },
    updateItem: (state, action) => {
      const {[action.payload.id]: updatedItem} = state;
      if (action.payload.update === 'increase') updatedItem.qty++;
      if (action.payload.update === 'decrease') updatedItem.qty--;
    },
    deleteItem: (state, action) => {
      const {[action.payload]: deletedItem, ...newState} = state;
      return state = newState;
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
