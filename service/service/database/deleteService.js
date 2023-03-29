import { UserSchema } from '../../models/index.js';

export const deleteUser = async (id) => {
  return await UserSchema.findByIdAndDelete(id);
};
