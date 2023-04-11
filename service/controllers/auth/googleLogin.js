import { request, response } from 'express';
import { generateJWT } from '../../utils/index.js';
import { createUserService, findUser } from '../../service/database/index.js';

const googleLogin = async (req = request, res = response) => {
  const { email, picture, name } = req.google;
  try {
    const user = await findUser(email);

    if (!user) {
      const newUser = await createUserService({
        fullname: name,
        email,
        password: 'p',
        image: {
          url: picture,
        },
        email_Verification: true,
      });
    }
    /*     const { _id, rol } = findUser._doc;

    const token = await generateJWT(_id, rol); */
    res.status(200).json({
      ok: true,
      msg: 'se recibio el token',
      /*       token, */
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};
export default googleLogin;
