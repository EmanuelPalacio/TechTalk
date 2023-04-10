import { findReadingById} from '../../service/database/index.js';

const findOneReading = async (req, res) => {
  const { id } = req.params;
  try {
    const dateReading = await findReadingById(id);
    const { __v, ...rest} = dateReading._doc;
    res.status(200).json({
      ok: true,
      rest
    })
    
  } catch (error) {
    res.status(500).json({
      ok: false,
      error
    })
  }
}

export default findOneReading;