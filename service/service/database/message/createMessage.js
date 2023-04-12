import Message from '../../../models/MessageSchema.js';

export const createMessage = async (message) => {
  const newMessage = await Message.create(message);
  await newMessage.save();
  return newMessage;
};
