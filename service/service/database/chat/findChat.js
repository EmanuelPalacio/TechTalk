import Conversation from "../../../models/ConversationSchema.js"

/* busca chat x id de los dos users sender y receiver */
export const findChat  = async (senderId, receiverId) => {
    
      const conversation = await Conversation.findOne({
        users: { $all: [senderId, receiverId] },
      }).populate('users');

      return conversation
  };