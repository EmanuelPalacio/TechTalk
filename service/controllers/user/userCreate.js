import { createUserService } from '../../service/database/index.js';

const userCreate = async (req, res) => {
  const { username, fullname, email, password } = req.body;

  try {
    await createUserService({
      username,
      fullname,
      email,
      password,
    });
    res.status(201).json({ ok: true, mgs: 'User created successfully' });
  } catch (error) {
    res.status(500).json({
      ok: false,
      error,
    });
  }
};

export default userCreate;
