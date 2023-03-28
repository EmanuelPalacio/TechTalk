import express from 'express';
import { userCreate, userAll, userUpdate, userOne, userDelete } from '../controllers/user/index.js'

const router = express.Router();

router.get('/', userAll);

router.get('/:id', userOne);
router.post('/create', userCreate);
router.put('/:id', userUpdate);
router.delete('/:id', userDelete);

export default router;