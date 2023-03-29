import { UserSchema } from '../../models/index.js';

export const findUser = async ({ username, email }) => {
  return await UserSchema.findOne({
    $or: [{ username }, { email }],
  });
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
