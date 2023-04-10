import Conversation from '../../../models/ConversationSchema.js';

/* get all chat of one user  */

export const searchChat = async (userId) => {
  console.log('search userId :', userId);

  const conversations = await Conversation.find({
    users: { $in: [userId] },
  });

  console.log('response find conv : ', conversations);

  return conversations.populate('users');
};
