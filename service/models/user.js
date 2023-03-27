import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
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
    type: String,
    default: "https://i.ibb.co/MBtjqXQ/no-avatar.gif",
  },
  friends_contacts: {
    type: [{idContact: String}]
  },
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
}, {
    timestamps: true
})

export default mongoose.model("User", UserSchema);