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

export const findFriends  = async (req, res) => {
  try {
    const user = await UserSchema.findById(req.params.id);
    const friends = await Promise.all(
      user.friends_contacts.map((friendId) => {
        return UserSchema.findById(friendId);
      })
    );
    let friendList = [];
    friends.map((friend) => {
      const { _id, fullname, image_url } = friend;
      friendList.push({ _id, fullname, image_url });
    });
    res.status(200).json(friendList)
  } catch (err) {
    res.status(500).json(err);
  }
};
