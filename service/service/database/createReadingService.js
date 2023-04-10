import { ReadingSchema } from '../../models/index.js';

const createReadingService = async ({
  level, text, question, listOfAnswers
}) => {
  const readingCreate = await ReadingSchema.create({
    level, text, question, listOfAnswers
  });
  await readingCreate.save();
  return readingCreate;
}

export default createReadingService;