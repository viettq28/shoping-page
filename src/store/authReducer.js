import { createSlice } from '@reduxjs/toolkit';

const authReducer = createSlice({
  name: 'auth',
  initialState: {
    isLogin: false,
    curCart: null,
  },
  reducers: {
    login: {
      prepare: () => {
        return {
          payload: {
            isLogin: true,
            curUser: JSON.parse(localStorage.getItem('LOGIN_USER')),
            curCart: null,
          },
        };
      },
      reducer: (state, action) => {
        return (state = action.payload);
      },
    },
    logout: (state) => {
      return state = {
        isLogin: false,
        curUser: null,
        curCart: null,
      };
    },
  },
});


export default authReducer.reducer;

export const { login, logout } = authReducer.actions;
