import Conversation from '../../../models/ConversationSchema.js';

/* get all chat of one user  */

export const searchChat = async (userId) => {
  const conversations = await Conversation.find({
    users: { $in: [userId] },
  }).populate('users');

  return conversations;
};
