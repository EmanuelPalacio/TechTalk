import bcryptjs from 'bcryptjs';
import UserSchema from '../../models/UserSchema.js';

const putUserUpdate = async(req,res) => {
  const { id } = req.params;
  const { _id, email, google, password, githud, ...rest } = req.body;
  if(password){
    const salt = bcryptjs.genSaltSync(10)
    rest.password = bcryptjs.hashSync(password, salt)
  }
  try {
    const update = await UserSchema.findByIdAndUpdate(id, rest, { new: true})
    res.status(201).json({
      ok: true,
      mgs: "Usuario actualizado con exito",
      update,
    })
    
  } catch (error) {
    res.status(500).json({
      ok: false,
      error,
    })
  }
}

export default putUserUpdate;