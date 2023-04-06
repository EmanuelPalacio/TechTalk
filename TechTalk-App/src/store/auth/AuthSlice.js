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
    logIn: (state, { payload }) => {
      (state.token = payload.token), (state.user = payload.user);
    },
    logOut: (state, { payload }) => {
      state.status = 'unauthorized';
      state.user = {};
    },
    authorized: (state) => {
      state.status = 'authorized';
    },
  },
});

export const { logIn, logOut, authorized } = authSlice.actions;
