import { findUserById } from '../../service/database/index.js';

const findUser = async (req, res) => {
  const { id } = req.params;
  try {
    const dateUser = await findUserById(id);
    const { __v, password, ...user } = dateUser._doc;
    res.status(200).json({
      ok: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      error,
    });
  }
};

export default findUser;
