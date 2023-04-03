import { Router } from 'express';
import { findReadingSchemas } from '../controllers/activities/findReadingSchemas.js';

const router = Router();

router.post('/reading', findReadingSchemas)

export default router;