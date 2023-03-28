import Users from '../../models/UserSchema.js';

const userAll = async (req, res) => {
  const { limit = 10, from = 0} = req.query
  try {
    const [total, users] = await Promise.all([
      Users.count(),
      Users.find().skip(Number(from)).limit(Number(limit))
    ])

    res.status(200).json({
      ok: true,
      total,
      users,
    })
  } catch (error) {
    res.status(500).json({
      ok: false,
      error,
    })
  }
}

export default userAll;