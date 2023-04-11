import { Router } from 'express';
import { googleLogin, login } from '../controllers/auth/index.js';
import { validateLogin, validateLoginGoogle } from '../middleware/index.js';

const router = Router();

router.post('/login', validateLogin, login);
router.post('/google', validateLoginGoogle, googleLogin);

export default router;
