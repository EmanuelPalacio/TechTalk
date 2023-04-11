import { createSlice } from '@reduxjs/toolkit';

export const conversation = createSlice({
  name: 'conversation',
  initialState: {
    conversation: [],
  },
  reducers: {
    updateConversation: (state, action) => {
      state.conversation = action.payload;
    },
  },
});

export const { updateConversation } = conversation.actions;
