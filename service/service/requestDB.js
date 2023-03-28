import { UserSchema } from '../models/index.js';

export const findUser = async ({ username, email }) => {
  await UserSchema.findOne({
    $or: [{ username }, { email }],
  });
};
