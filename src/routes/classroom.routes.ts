import { verifyToken } from '../middlewares/jwt.handle';
import { Router } from 'express';
const router: Router = Router();

import {getVacancies, generateAllVacancies, collegueVacancies, addCapacityVacancies} from '../controllers/classroom.controller'

router.get('/api/classroom/', verifyToken, getVacancies)
router.post('/api/classroom/vacancies', verifyToken, collegueVacancies)
router.post('/api/classroom/generate', verifyToken, generateAllVacancies)
router.post('/api/classroom/addcapacity', verifyToken, addCapacityVacancies)

export default router;
