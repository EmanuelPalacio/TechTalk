import { ReadingSchema, UserSchema } from '../../models/index.js';

export const updateUser = async (id, data) => {
  const update = await UserSchema.findByIdAndUpdate(id, data, { new: true });
  return update;
};

export const updateReading = async (id, data) => {
  const update = await ReadingSchema.findByIdAndUpdate(id, data, { new: true });
  return update;
}