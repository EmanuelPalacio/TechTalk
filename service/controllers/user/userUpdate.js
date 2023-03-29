import bcryptjs from 'bcryptjs';
import { updateUser } from '../../service/database/index.js';

const userUpdate = async (req, res) => {
  const { id } = req.params;
  const { _id, email, google, password, githud, ...rest } = req.body;
  if (password) {
    const salt = bcryptjs.genSaltSync(10);
    rest.password = bcryptjs.hashSync(password, salt);
  }
  try {
    const user = await updateUser(id, rest);
    res.status(201).json({
      ok: true,
      mgs: 'Usuario actualizado con exito',
      user,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      error,
    });
  }
};

export default userUpdate;
