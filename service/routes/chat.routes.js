import { Router } from 'express';
import { searchChat } from "../controllers/chat/searchChat.js"
import { createChat } from "../controllers/chat/createChat.js"

const router = Router();

/* crea una conversacion - chat */
router.post('/create', createChat);
/* busca todas las conversaciones de un user - chat */
router.get('/search/:id', searchChat);

export default router;