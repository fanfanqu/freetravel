import express from 'express';
import userApi from './users-api';
import loginApi from './sessions-api';
import personApi from './personal-api';
import productApi from './products-api';

const router = express.Router();

router.use('/users', userApi);
router.use('/sessions', loginApi);
// router.use('/personal', loginApi);
router.use('/products',productApi)

export default router;
