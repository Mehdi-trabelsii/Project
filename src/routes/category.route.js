import express from 'express';
import * as controller from '../controllers/category.controller';
import validate from '../middlewares/validation';
import { listcategories,createcategory } from '../validations/category.validation';

const router = express.Router();
router.route('/listcategories').get(validate(listcategories), controller.list);
router.route('/createcategory').post(validate(createcategory), controller.add);

export default router;