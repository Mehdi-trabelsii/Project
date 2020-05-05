import express from 'express';

import authRoutes from './auth.route';
import userRoutes from './user.route';


const router = express.Router();
/**
 * GET v1/status
 */
router.get('/status', (req, res) => res.send('OK'));


router.use('/users', userRoutes);
router.use('/auth', authRoutes);

export default router;