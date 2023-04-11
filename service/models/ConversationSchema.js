import { Schema, model, Types } from 'mongoose';

const Conversation = new Schema(
  {
    users: 
       [{ type: Types.ObjectId, ref: 'User' }],
    
    isPrivate: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);

Conversation.path('users').validate(function (value) {
  // El valor `this` se refiere al documento actual
  const isPrivate = this.isPrivate;

  // Si la conversación es privada, debe haber exactamente dos usuarios
  if (isPrivate && value.length !== 2) {
    throw new Error(
      'Las conversaciones privadas deben tener exactamente dos usuarios',
    );
  }

  // Si la conversación es grupal, debe haber al menos un usuario
  if (!isPrivate && value.length < 1) {
    throw new Error(
      'Las conversaciones grupales deben tener al menos un usuario',
    );
  }

  return true;
});

const ConversationSchema = model('Conversation', Conversation);
export default ConversationSchema;
