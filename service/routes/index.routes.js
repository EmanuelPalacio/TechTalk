import { Router } from 'express';
const router = Router();

router.use('/user' /* userRoutes */);
router.use('/auth' /* authRoutes */);
router.use('/uploads' /* uploadsRoutes */);

export default router;
