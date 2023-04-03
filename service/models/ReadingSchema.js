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
    tittle: {
      type: String,
      required: true,
    },
  },
  listOfQuestions: [
    {
      question: {
        type: String,
        required: true,
      },
      answers: [
        {
          answer: { type: String, required: true },
          isCorrect: { type: Boolean, required: true },
        },
      ],
    },
  ],
});

const ReadingSchema = model('Reading', Reading);
export default ReadingSchema;
