import{ UserSchema }from '../../models/index.js';
import bcryptjs from 'bcryptjs';
//import jwt from 'jsonwebtoken';

const userCreate = async (req, res) => {
  const { username, fullname, email, password, } = req.body;

  const salt = bcryptjs.genSaltSync(10);
  try {
    const userCreate = await UserSchema.create({
      username,
      fullname,
      email,
      password,
    });
    userCreate.password = bcryptjs.hashSync(password, salt);

    await userCreate.save();
    res.status(201).json({ ok: true, mgs: "Usuario creado con exito",userCreate });
  } catch (error) {
    res.status(500).json({ 
      ok: false, 
      error });
  }
};

export default userCreate;
