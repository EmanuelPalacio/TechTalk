import { createSlice } from '@reduxjs/toolkit';

export const LoadingSlice = createSlice({
  name: 'loading',
  initialState: {
    status: 'pending',
  },
  reducers: {
    pending: (state) => {
      state.status = 'pending';
    },
    fulfilled: (state) => {
      state.status = 'fulfilled';
    },
  },
});

export const { pending, fulfilled } = LoadingSlice.actions;
