/** @format */

import express from 'express';

const router = express.Router();

// Users routes

//import user from '@routes/userRoutes';
import productRouter from '@routes/productRouter';

router.use(productRouter);

export default router;
