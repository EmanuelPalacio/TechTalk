import { Router } from 'express';
import {
  deleteUser,
  findUser,
  findAllUsers,
  userCreate,
  userUpdate,
} from '../controllers/user/index.js';
import {
  tokenValidator,
  validateAdminRol,
  validateCreateUser,
} from '../middleware/index.js';
const router = Router();

router.get('/', findAllUsers);

router.get('/:id', findUser);
router.post('/create', validateCreateUser, userCreate);
router.put('/:id', tokenValidator, validateAdminRol, userUpdate);
router.put('/:id', userUpdate);
router.delete('/:id', tokenValidator, validateAdminRol, deleteUser);

export default router;
