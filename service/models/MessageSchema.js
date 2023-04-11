import { Schema, model, Types } from 'mongoose';

const Message = new Schema({
  conversation: {
    type: String,
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
