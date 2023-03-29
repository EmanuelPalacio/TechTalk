import express from 'express';
import { userCreate, userAll, userUpdate, userOne, userDelete } from '../controllers/user/index.js'
import {tokenValidator, validateAdminRol, validateCreateUser} from '../middleware/index.js';
const router = express.Router();

router.get('/', userAll);

router.get('/:id', userOne);
router.post('/create', validateCreateUser, userCreate);
router.put('/:id', tokenValidator ,validateAdminRol, userUpdate);
router.delete('/:id',tokenValidator, validateAdminRol, userDelete);

export default router;