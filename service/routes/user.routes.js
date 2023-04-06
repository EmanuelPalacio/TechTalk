import { Router } from 'express';
import {
  deleteUser,
  findUser,
  findUsers,
  userCreate,
  userUpdate,
} from '../controllers/user/index.js';
import {
  tokenValidator,
  validateAdminRol,
  validateCreateUser,
} from '../middleware/index.js';

const router = Router();

router.get('/', findUsers);

router.get('/:id', findUser);
router.post('/create', validateCreateUser, userCreate);
router.put('/:id', tokenValidator, validateAdminRol, userUpdate);
router.delete('/:id', tokenValidator, validateAdminRol, deleteUser);

export default router;
