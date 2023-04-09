import { UserSchema, ReadingSchema } from '../../models/index.js';

export const findUser = async (email) => {
  return await UserSchema.findOne({ email });
};

export const findUserById = async (id) => {
  return await UserSchema.findById(id);
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
