import { Router } from 'express';
import authRoute from "../routes/auth.route.js";
const router = Router();

//router.use('/api/user' /* userRoutes */);
router.use('/auth', authRoute);
//router.use('/api/uploads' /* uploadsRoutes */);

export default router;
