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
      default:
        'https://res.cloudinary.com/dshfifpgv/image/upload/v1681086310/Images%20proyect%20techTalk/TechTalkAssets/Defaut%20avatar%20profile/Avatar_bczsp0.jpg',
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
});

const UserSchema = model('User', user);
export default UserSchema;
