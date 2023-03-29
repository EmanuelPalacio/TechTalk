import { UserSchema } from '../../models/index.js';

export const updateUser = async (id, data) => {
  const update = await UserSchema.findByIdAndUpdate(id, data, { new: true });
  return update;
};
