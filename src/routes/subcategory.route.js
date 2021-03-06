import express from 'express';
import * as controller from '../controllers/subcategory.controller';
import validate from '../middlewares/validation';
import { listsubcategories,createsubcategory } from '../validations/subcategory.validation';

const router = express.Router();
router.route('/list').get(validate(listsubcategories),controller.list);
router.route('/create').post(validate(createsubcategory), controller.add);
export default router;