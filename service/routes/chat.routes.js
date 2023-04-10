import { Router } from 'express';
import { searchChat } from "../controllers/chat/searchChat.js"
import { createChat } from "../service/database/chat/createChat.js"

const router = Router();

/* crea una conversacion - chat */
router.post('/create', createChat);
/* busca todas las conversaciones de un user - chat */
router.get('/search/:id', searchChat);
/* busca conversacion de dos usuarios - sender y receiver */
router.get('/find/:senderUserId/:receiverUserId', findChat);


export default router;