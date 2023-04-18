import Conversation from "../../../models/ConversationSchema.js"


export const createChat = async (senderId, receiverId) => {

  console.log(`senderId: ${senderId}, receiverId: ${receiverId}`);
    
    const newConversation = await Conversation.create({
      users: [senderId, receiverId]
    });
      
      return newConversation;
};