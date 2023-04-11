import Conversation from '../../../models/ConversationSchema.js';

/* get all chat of one user  */

export const searchChat = async (userId) => {
  console.log('searchChat.js userId :', userId);

  const conversations = await Conversation.find({
    users: { $in: [userId] },
  }).populate("users");

  console.log('response searchChat.js conv : ', conversations);

  return conversations;
};
