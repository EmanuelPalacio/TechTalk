import Conversation from "../../models/ConversationSchema.js"
import JWT from "jsonwebtoken";
import { KEY_JWT } from '../../config/index.js';

/* get all chat of one user  */

export const searchChat = async (req, res) => {
  //const {data} = JWT.decode(req.token, KEY_JWT, true);
  
  const { id } = req.params;
  console.log(id)
  // users: { $in: [req.params.userId] },
    try {
        const conversation = await Conversation.find({
          users: { $in: [id] },
        });
        console.log(conversation)
        res.status(200).json(conversation);
      } catch (err) {
        res.status(500).json(err);
      }
}; 