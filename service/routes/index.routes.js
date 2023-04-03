import { Router } from 'express';
import authRoute from './auth.routes.js';
import userRoute from './user.routes.js';
import uploadRoute from './upload.routes.js';
const router = Router();

router.use('/user', userRoute);
router.use('/auth', authRoute);
router.use('/upload', uploadRoute);
router.get('/', (req, res) => {
  res.send('Server is Running...');
});
router.get('/*', (req, res) => {
  res.send('404');
});
export default router;
