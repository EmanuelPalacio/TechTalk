import { check } from 'express-validator';
import { checkEmail, checkExpressValidator } from './index.js';

const validateCreateUser = [
  check('email', 'The email must exist').exists(),
  check('email', 'The email must not be empty').notEmpty(),
  check('email', 'The email must be of type string').isString(),
  check('email', 'The email must be a valid email').isEmail(),
  check('email').custom(checkEmail),

  check('fullname', 'The fullname must not be empty').notEmpty(),
  check('fullname', 'The fullname must be of type string').isString(),

  check('password', 'The password must not be empty').notEmpty(),
  check('password', 'The password must be of type string').isString(),
  check(
    'password',
    'The password field must be at least 8 characters long and contain at least one uppercase, one lowercase, and one special character.',
  )
    .isLength({ min: 8 })
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/),
  checkExpressValidator,
];

export default validateCreateUser;
