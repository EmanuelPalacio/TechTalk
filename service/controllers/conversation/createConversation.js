import Conversation from "../../models/ConversationSchema.js"


export const createConversation = async (req, res) => {
  const {users} = req.body  
  
  try {
      const newConversation = await Conversation.create({
          users
        });
      await newConversation.save();
      res.status(200).json(newConversation);
    } catch (err) {
      res.status(500).json(err);
    }
};