import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'unauthorized',
    token: null,
    errorMessage: null,
    user: {},
  },
  reducers: {
    logIn: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    logOut: (state) => {
      state.status = 'unauthorized';
      state.user = {};
    },
    authorized: (state) => {
      state.status = 'authorized';
    },
  },
});

export const { logIn, logOut, authorized } = authSlice.actions;
