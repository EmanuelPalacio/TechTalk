import Conversation from "../../../models/ConversationSchema.js"

export const findChat  = async (req, res) => {
    try {
      const conversation = await Conversation.findOne({
        users: { $all: [req.params.senderUserId, req.params.receiverUserId] },
      });
      res.status(200).json(conversation)
    } catch (err) {
      res.status(500).json(err);
    }
  };