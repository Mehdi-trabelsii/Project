import express from 'express';

import authRoutes from './auth.route';
import userRoutes from './user.route';
import productRoutes from './product.route'
import promotionRoutes from'./promotion.route'


const router = express.Router();
/**
 * GET v1/status
 */
router.get('/status', (req, res) => res.send('OK'));
router.use('/promos',promotionRoutes);
router.use('/products',productRoutes);
router.use('/users', userRoutes);
router.use('/auth', authRoutes);

export default router;