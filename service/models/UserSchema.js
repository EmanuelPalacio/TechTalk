import { Schema, model, Types } from 'mongoose';

const user = new Schema({
  fullname: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  phone: {
    type: String,
    unique: true,
  },
  country: {
    type: String,
  },
  city: {
    type: String,
  },
  password: {
    type: String,
    require: true,
  },
  image: {
    url: {
      type: String,
      default: 'https://i.ibb.co/MBtjqXQ/no-avatar.gif',
    },
    id: {
      type: String,
    },
  },
  friends_contacts: [{ type: Types.ObjectId, ref: 'User' }],
  email_Verification: {
    type: Boolean,
    default: false,
  },
  performance: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
});

const UserSchema = model('User', user);
export default UserSchema;
