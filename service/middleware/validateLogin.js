import { check } from 'express-validator';
import checkExpressValidator from './checkExpressValidator.js';

const validateLogin = [
  check('email', 'email field must be an email').isEmail(),
  check('password', 'password field must not be empty')
    .notEmpty()
    .isStrongPassword()
    .withMessage(
      'Password must contain at least 8 characters, 1 lowercase, 1 uppercase, 1 number, 1 symbol.',
    ),
  checkExpressValidator,
];
export default validateLogin;
