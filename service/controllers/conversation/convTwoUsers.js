import Conversation from '../../models/ConversationSchema.js';

export const convTwoUsers = async (req, res) => {
    try {
      const conversation = await Conversation.findOne({
        users: { $all: [req.params.senderId, req.params.receiverId] },
      });
      res.status(200).json(conversation)
    } catch (err) {
      res.status(500).json(err);
    }
  };