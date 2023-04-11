import bcryptjs from 'bcryptjs';
import { findUser } from '../../service/database/index.js';
import { generateJWT } from '../../utils/index.js';

const login = async (req, res) => {
  const { password: passReceived, email } = req.body;
  
  try {
    const userData = await findUser(email);
    const { password, condition, ...user } = userData._doc;
    const validatePassword = bcryptjs.compareSync(passReceived, password);
    if (user.isActive === false){
      return res.status(403).json({
        ok: false,
        msg: `The user is Banned`,
      });
    }
    if (!user || !validatePassword) {
      return res.status(400).json({
        ok: false,
        msg: `The user or password is not correct`,
      });
    }

    const token = await generateJWT(user._id, user.isAdmin);
    res.status(200).json({
      ok: true,
      user,
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
