import UserSchema from '../../models/UserSchema.js';

const userOne = async(req, res) => {
  const { id } = req.params;
  try {
    const dateUser = await UserSchema.findById(id)
    const { __v, password, ...user } = dateUser._doc;
    res.status(200).json({
      ok: true,
      user,
    })
    
  } catch (error) {
    res.status(500).json({
      ok: false,
      error,
    })
  }
}

export default userOne;