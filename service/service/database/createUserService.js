import bcryptjs from 'bcryptjs';
import { UserSchema } from '../../models/index.js';

const createUserService = async ({
  fullname,
  email,
  password,
  image,
  email_Verification,
}) => {
  const salt = bcryptjs.genSaltSync(10);
  const userCreate = await UserSchema.create({
    fullname,
    email,
    password,
    image,
    email_Verification,
  });
  userCreate.password = bcryptjs.hashSync(password, salt);
  await userCreate.save();
  return userCreate;
};
export default createUserService;
