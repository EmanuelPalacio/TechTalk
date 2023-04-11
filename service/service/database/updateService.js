import { ReadingSchema, UserSchema } from '../../models/index.js';

export const updateUser = async (id, data) => {
  let userUpdate = data;
  if (userUpdate.friends_contacts) {
    const { friends_contacts, ...rest } = userUpdate;
    const newData = {
      ...rest,
      $push: { friends_contacts: { $each: data.friends_contacts } },
    };
    userUpdate = newData;
  }

  const update = await UserSchema.findByIdAndUpdate(id, userUpdate, {
    new: true,
  });
  return update;
};

export const updateReading = async (id, data) => {
  const update = await ReadingSchema.findByIdAndUpdate(id, data, { new: true });
  return update;
};
