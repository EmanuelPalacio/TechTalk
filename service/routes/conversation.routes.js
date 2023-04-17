import { Router } from 'express';
import { convTwoUsers, createConversation, searchConversation } from "../controllers/conversation/index.js"

const router = Router();

/* crea una conversacion */
router.post('/conversations', createConversation);
/* busca una conversacion */
router.get('/conversations', searchConversation);
/* busca x las dos id de la conversation */
router.get('/conversations/:senderId/:receiverId', convTwoUsers);

export default router;