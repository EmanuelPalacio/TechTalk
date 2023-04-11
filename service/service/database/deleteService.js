import { ReadingSchema, UserSchema } from '../../models/index.js';

export const deleteUser = async (id) => {
  return await UserSchema.findByIdAndDelete(id);
};

export const readingDelete = async(id) => {
  return await ReadingSchema.findByIdAndDelete(id);
}