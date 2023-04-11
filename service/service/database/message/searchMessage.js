import Message from "../../../models/MessageSchema.js"

/* get all messages of one user  */

export const searchMessage = async (convId) => {
    console.log("Conv Id : ",convId)
    const messages = await Message.find({
      conversationId: convId,
    });
    console.log("Mensajes en searchMessage", messages)
    return messages;
  
}; 