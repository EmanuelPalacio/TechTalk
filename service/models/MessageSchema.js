import { Schema, model, Types } from 'mongoose';

const Message = new Schema({
  conversationId: {
    type: Types.ObjectId,
    ref: 'Conversation',
    immutable: true,
  },
  sender: {
    type: Types.ObjectId,
    ref: 'User',
    immutable: true,
  },
  text: {
    type: String,
  },
},
{ timestamps: true }
);

const MessageSchema = model('Message', Message);
export default MessageSchema;
