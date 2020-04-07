/** @format */

import express from 'express';

const router = express.Router();
import productController from '@controllers/productsController';

router.get('/categories', productController.ControllerApiRest.getCategoryALl);

export default router;
