import Message from "../../../models/MessageSchema.js"


export const createMessage = async (message) => {
  const newMessage = Message.create(message);

  
    const savedMessage = await newMessage.save();
    return savedMessage;
  
};