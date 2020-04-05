/** @format */

import express from 'express';

const router = express.Router();
import productController from '@controllers/productsController';

router.get('/categories', productController.getCategoryALl);

export default router;
