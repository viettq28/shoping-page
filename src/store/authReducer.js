import { createSlice } from '@reduxjs/toolkit';

const authReducer = createSlice({
  name: 'auth',
  initialState: {
    curUser: null,
    curCart: null,
  },
  reducers: {
    login: {
      prepare: () => {
        return {
          payload: {
            curUser: JSON.parse(localStorage.getItem('LOGIN_USER')).fullname,
            curCart: JSON.parse(localStorage.getItem('LOGIN_USER')).id,
          },
        };
      },
      reducer: (state, action) => {
        return state = action.payload;
      },
    },
    logout: (state) => {
      return state = {
        curUser: null,
        curCart: null,
      };
    },
  },
});


export default authReducer.reducer;

export const { login, logout } = authReducer.actions;
