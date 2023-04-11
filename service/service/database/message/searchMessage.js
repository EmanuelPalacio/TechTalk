import Message from "../../../models/MessageSchema.js"

/* get all messages of one conversation id  */

export const searchMessage = async (idConversation) => {
    console.log("Conv Id en searchMessage: ", idConversation)
    const messages = await Message.find({
      conversationId:  idConversation
    }).populate('sender')
    .exec()
    console.log("Mensajes en searchMessage", messages)
    return messages;
  
}; 