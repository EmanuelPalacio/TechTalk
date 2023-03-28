import { Schema, model, Types } from 'mongoose';

const Message = new Schema(
  {
    conversation: {
      type: Types.ObjectId,
      ref: 'Conversation',
    },
    sender: {
      type: Types.ObjectId,
      ref: 'User',
    },
    text: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

const MessageSchema = model('Message', Message);
export default MessageSchema;
