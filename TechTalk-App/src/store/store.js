import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth/AuthSlice';
import { LoadingSlice } from './loading/LoadingSlice';
import { conversation } from './conversation/conversation.js';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    loading: LoadingSlice.reducer,
    conversation: conversation.reducer,
  },
});
