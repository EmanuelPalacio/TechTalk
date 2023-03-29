import bcryptjs from 'bcryptjs';
import { UserSchema } from '../../models/index.js';

const createUserService = async ({ username, fullname, email, password }) => {
  const salt = bcryptjs.genSaltSync(10);
  const userCreate = await UserSchema.create({
    username,
    fullname,
    email,
    password,
  });
  userCreate.password = bcryptjs.hashSync(password, salt);
  await userCreate.save();
  return userCreate;
};
export default createUserService;
