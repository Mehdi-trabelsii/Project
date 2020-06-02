import express from 'express';
import * as controller from '../controllers/product.controller'
import validate from '../middlewares/validation';
import { listProducts,createProduct,updateProduct } from '../validations/product.validation'

const router = express.Router();
router.route('/listprod').post(validate(listProducts), controller.list);
router.route('/create').post(validate(createProduct), controller.add);
router.route('/:id').patch(validate(updateProduct),controller.update);

export default router;