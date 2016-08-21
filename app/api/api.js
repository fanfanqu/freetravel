import express from 'express';
import userApi from './users-api'
import loginApi from './sessions-api'
import personApi from './personal-api'

const router = express.Router();

router.use('/users', userApi);
router.use('/sessions', loginApi);
router.use('/personal', loginApi);

export default router;
