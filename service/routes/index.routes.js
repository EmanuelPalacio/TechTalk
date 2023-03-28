import { Router } from 'express';
import authRoute from './auth.routes.js';
import userRoute from './user.route.js';
const router = Router();

router.use('/user', userRoute );
router.use('/auth', authRoute);
//router.use('/api/uploads' /* uploadsRoutes */);

export default router;
