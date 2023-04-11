import { Schema, model } from 'mongoose';

const Listening = new Schema({
  level:{
      type: String,
      required: true,    
  },
  audio: {
    url: {
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

const ListeningSchema = model('Listening', Listening);
export default ListeningSchema;
