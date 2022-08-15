import { Router } from 'express';
import validateRequest from '../middlewares/validateRequest';
import resizeContoller from './controllers/imageController';
const router = Router();

router.get('/image', validateRequest, resizeContoller);

export default router;
