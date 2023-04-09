import { readingDelete } from '../../service/database/index.js';

const deleteReading = async (req, res) => {
  const { id } = req.params;
  try {
    const reading = await readingDelete(id);
    res.status(200).json({
      ok: true,
      reading,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      error,
    });
  }
};

export default deleteReading;
