import Conversation from "../../models/ConversationSchema.js"


export const createConversation = async (req, res) => {
    const newConversation = new Conversation({
      users: [req.body.senderId, req.body.receiverId],
    });
  
    try {
      const savedConversation = await newConversation.save();
      res.status(200).json(savedConversation);
    } catch (err) {
      res.status(500).json(err);
    }
};