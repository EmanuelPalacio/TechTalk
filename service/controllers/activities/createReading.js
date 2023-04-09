import { createReadingService } from '../../service/database/index.js';

const readingCreate = async (req, res) => {
  const { level, text, question, listOfAnswers } = req.body;

  try {
    const createUser = await createReadingService({
      level, text, question, listOfAnswers
      
    })
    res.status(201).json({
      ok:true,
      activity: createUser
    })
  } catch (error) {
    res.status(500).json({
      ok: false,
      error
    })
  }
}

export default readingCreate;