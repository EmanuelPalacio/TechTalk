import { Router } from 'express';
import { createReading, findReadingSchemas, updateReading, deleteReading, findOneReading } from '../controllers/activities/index.js';
import tokenValidator from '../middleware/tokenValidator.js';
import { multerPathTemp } from '../utils/multerConfig.js';
import validateListeningAudio from '../middleware/validateListeningAudio.js';

const router = Router();
const multerMiddleware = multerPathTemp();

router.get('/reading', findReadingSchemas);
router.get('/reading/:id', findOneReading)
router.post('/reading/create', createReading);
router.put('/reading/update/:id', updateReading);
router.delete('/reading/delete/:id', deleteReading);
router.put(
  '/listening',  
  //tokenValidator,
  multerMiddleware.single('file'),
  //middleware de verificar el peso del audio 4mb verificar q sea mp3
  validateListeningAudio
  //controlador para subir archivo a claudinary
);



export default router;
