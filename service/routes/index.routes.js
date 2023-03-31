import { Router } from 'express';
import authRoute from './auth.routes.js';
import userRoute from './user.routes.js';
import uploadRoute from './upload.routes.js';
const router = Router();

router.use('/user', userRoute);
router.use('/auth', authRoute);
router.use('/upload', uploadRoute);

export default router;
