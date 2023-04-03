import { Schema, model } from 'mongoose';

const Reading = new Schema({
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

const ReadingSchema = model('Listening', Reading);
export default ReadingSchema;
