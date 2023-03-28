import { Schema, model, Types } from 'mongoose';

const user = new Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
    },
    fullname: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    country: {
      type: String,
      require: true,
    },
    city: {
      type: String,
      require: true,
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
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

const UserSchema = model('User', user);
export default UserSchema;
