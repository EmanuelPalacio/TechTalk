import bcryptjs from 'bcryptjs';
import { UserSchema } from '../../models/index.js';

const createUserService = async ({ phone, fullname, email, password }) => {
  const salt = bcryptjs.genSaltSync(10);
  const userCreate = await UserSchema.create({
    phone,
    fullname,
    email,
    password,
  });
  userCreate.password = bcryptjs.hashSync(password, salt);
  await userCreate.save();
  return userCreate;
};
export default createUserService;
