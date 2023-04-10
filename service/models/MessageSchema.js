import { Schema, model, Types } from 'mongoose';

const Message = new Schema({
  conversationId: {
    type: String,
  },
  sender: {
    type: String,
  },
  text: {
    type: String,
  },
},
{ timestamps: true }
);

const MessageSchema = model('Message', Message);
export default MessageSchema;
