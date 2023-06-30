import { createSlice } from "@reduxjs/toolkit";

const authReducer = createSlice({
  name: 'auth',
  initialState: '',
  reducers: {
    login: (state, action) => {
      return state = action.payload;
    },
  },
})

export function logout() {
  return (dispatch) => {
    localStorage.removeItem('LOGIN_USER');
    dispatch({type: 'auth/logout', state: ''});
  }
}

export default authReducer.reducer;

export const { login } = authReducer.actions

