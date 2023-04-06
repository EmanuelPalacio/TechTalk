import { Router } from 'express';
import { searchMessage } from "../controllers/message/searchMessage.js"
import { createMessage } from "../controllers/message/createMessage.js"

const router = Router();

/* crea una conversacion - chat */
router.post('/create', createMessage);
/* busca todas las conversaciones de un user - chat */
router.get('/:conversationId', searchMessage);

export default router;