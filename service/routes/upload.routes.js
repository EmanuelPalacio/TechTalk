import { Router } from 'express';
import {
  checkExpressValidator,
  checkId,
  tokenValidator,
  validateUserImage,
} from '../middleware/index.js';
import { multerPathTemp } from '../utils/multerConfig.js';
import { cloudinaryUserImage } from '../controllers/upload/index.js';
import { param } from 'express-validator';

const multerMiddleware = multerPathTemp();
const router = Router();

router.put(
  '/image/:userId',
  [
    param('userId', 'userId value not found.').notEmpty(),
    param('userId', 'not a valid mongo id').isMongoId(),
    param('userId').custom(checkId),
    checkExpressValidator,
  ],
  tokenValidator,
  multerMiddleware.single('file'),
  validateUserImage,
  cloudinaryUserImage,
);

export default router;
