import { Router } from 'express';
import { createConversation, searchConversation } from "../controllers/conversation"

const router = Router();

/* crea una conversacion */
router.post('/conversations', createConversation);
/* busca una conversacion */
router.get('/conversations', searchConversation);

export default router;