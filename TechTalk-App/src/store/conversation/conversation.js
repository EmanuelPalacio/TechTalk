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
    addConversation: (state, action) => {
      const newconv = action.payload
      state.conversation = [...state.conversation, newconv]
    }
  },
});

export const { updateConversation, addConversation } = conversation.actions;
