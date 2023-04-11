import { Schema, model } from 'mongoose';

const Reading = new Schema({
  level: {
    type: String,
    required: true,
  },
  text: {
    content: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  question: {
    type: String,
    required: true,
  },
  listOfAnswers: [
    {
      answer: { type: String, required: true },
      isCorrect: { type: Boolean, required: true },
    },
  ],
});

const ReadingSchema = model('Reading', Reading);
export default ReadingSchema;