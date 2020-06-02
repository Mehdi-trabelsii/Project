import express from 'express';
import * as controller from '../controllers/pormotion.controller'
import validate from '../middlewares/validation';
import { listPromos,createPromos } from '../validations/promotion.validation';


const router = express.Router();

router.route('/listpromos').post(validate(listPromos),controller.list);
router.route('/createpromos').post(validate(createPromos),controller.add);

export default router;