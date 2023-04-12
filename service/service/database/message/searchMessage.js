import Message from '../../../models/MessageSchema.js';

/* get all messages of one conversation id  */

export const searchMessage = async (idConversation) => {
  const messages = await Message.find({
    conversationId: idConversation,
  });

  return messages;
};
