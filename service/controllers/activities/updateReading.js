import { updateReading } from "../../service/database/index.js";

const readingUpdate = async (req, res) => {
  const { id } = req.params;
  const { _id, __v, ...rest} = req.body;
  
  try {
    const reading = await updateReading(id, rest);
    res.status(201).json({
      ok: true,
      msg: 'User updated successfully',
      reading
    })    
  } catch (error) {
    res.status(500).json({
      ok: false,
      error,
    })
  }
}

export default readingUpdate;