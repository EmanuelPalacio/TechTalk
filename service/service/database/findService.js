import { UserSchema, ReadingSchema } from '../../models/index.js';

export const findUser = async (email) => {
  return await UserSchema.findOne({ email });
};

export const findUserById = async (id) => {
  const user = await UserSchema.findById(id);
  return user.populate('friends_contacts', 'fullname image phone');
};

export const listUsers = async (from, limit) => {
  const [total, users] = await Promise.all([
    UserSchema.count(),
    UserSchema.find()
      .skip(Number(from))
      .limit(Number(limit))
      .select('_id username email isAdmin isActive'),
  ]);
  return { total, users };
};

export const findReading = async (from, limit) => {
  const [total, actvities] = await Promise.all([
    ReadingSchema.count(),
    ReadingSchema.find().skip(Number(from)).limit(Number(limit)),
  ]);
  return { total, actvities };
};

export const findReadingById = async (id) => {
  return await ReadingSchema.findById(id);
};

export const findFriends = async (id) => {
  try {
    const user = await UserSchema.findById(id);
    user.populate('friends_contacts').select('_id image fullname phone ');
    return user;
  } catch (err) {
    console.log(err);
  }
};
