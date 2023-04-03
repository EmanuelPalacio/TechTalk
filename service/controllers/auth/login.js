import bcryptjs from 'bcryptjs';
import { findUser } from '../../service/database/index.js';
import { generateJWT } from '../../utils/index.js';

const login = async (req, res) => {
  const { password: passReceived, email } = req.body;
  console.log(email, passReceived);
  try {
    const userData = await findUser(email);
    const { password, condition, ...user } = userData._doc;
    const validatePassword = bcryptjs.compareSync(passReceived, password);

    if (!user || !validatePassword) {
      return res.status(400).json({
        ok: false,
        msg: `The user/password is not correct`,
      });
    }

    const token = await generateJWT(user._id, user.isAdmin);
    res.status(200).json({
      ok: true,
      msg: 'Logged in successfully',
      token,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      error,
    });
  }
};
export default login;
