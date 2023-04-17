import { Schema, model } from 'mongoose';

const Reading = new Schema({
  level: {
    type: String,
    required: true,
  },
  image: {
    url: {
      type: String,
      default:
        'https://res.cloudinary.com/dshfifpgv/image/upload/v1681128139/Images%20proyect%20techTalk/TechTalkAssets/Defaut%20avatar%20profile/Reading_tglith.svg',
    },
    id: {
      type: String,
    },
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
