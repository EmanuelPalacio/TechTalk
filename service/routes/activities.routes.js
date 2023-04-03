import { Router } from 'express';
import { findReadingSchemas } from '../controllers/activities/index.js';

const router = Router();

router.get('/reading', findReadingSchemas);

export default router;
