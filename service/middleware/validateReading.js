import { check } from 'express-validator';
import { checkTitle, checkExpressValidator} from './index.js'

const validateReadeing = [
  check ('text.title', 'The title already exists').exists(),
  check ('text.title', 'The title must not be empty').notEmpty(),
  check ('text.title', 'The title must be of type string').isString(),
  check ('text.title').custom(checkTitle),

  check ('text.content', 'The content must not be empty').notEmpty(),
  check ('text.content', 'The content must be of type string').isString(),

  check ('listOfAnswers.*.answer', 'The answer must not be empty').notEmpty(),
  check ('listOfAnswers.*.answer', 'The answer must be of type string').isString(),

  check ('listOfAnswers.*.isCorrect', 'The answer must not be empty').notEmpty(),
  check ('listOfAnswers.*.isCorrect', 'The response must be of type Boolean').isBoolean(),

  checkExpressValidator
];

export default validateReadeing;

