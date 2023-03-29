import { listUsers } from '../../service/database/index.js';

const findUsers = async (req, res) => {
  const { limit = 10, from = 0 } = req.query;
  try {
    const { total, users } = await listUsers(from, limit);
    res.status(200).json({
      ok: true,
      total,
      users,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      error,
    });
  }
};

export default findUsers;
