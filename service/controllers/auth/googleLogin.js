import { request, response } from 'express';
import bcryptjs from 'bcryptjs';
import { UserSchema } from '../../models/index.js';
import { generateJWT } from '../../utils/index.js';
import { findUser } from '../../service/database/index.js';

const googleLogin = async (req = request, res = response) => {
  const { email, picture, name } = req.google;
  try {
    const user = findUser({ email });

    if (!user) {
      const salt = bcryptjs.genSaltSync();
      const userCreate = await UserSchema.create({
        email,
        name,
        image: {
          url: picture,
        },
        password: ':P',
        google: true,
      });
      userCreate.password = bcryptjs.hashSync(userCreate.password, salt);
      await userCreate.save();
    }
    const { _id, rol } = findUser._doc;

    const token = await generateJWT(_id, rol);
    res.status(200).json({
      ok: true,
      msg: 'se recibio el token',
      token,
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};
export default googleLogin;
