import Conversation from "../../models/ConversationSchema.js"

export const searchConversation = async (req, res) => {
    try {
        const conversation = await Conversation.find({
          users: { $in: [req.params.userId] },
        });
        res.status(200).json(conversation);
      } catch (err) {
        res.status(500).json(err);
      }
}; 