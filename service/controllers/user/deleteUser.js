import { deleteUser } from '../../service/database/deleteService.js';

const deleleUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await deleteUser(id);
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

export default deleleUser;
