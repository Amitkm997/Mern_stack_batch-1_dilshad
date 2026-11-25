import express from 'express'
import { createProduct } from '../controllers/productController.js';
import { authentication,authorization } from '../middleware/authMiddleware.js';
const router=express.Router();

router.post('/',authentication,authorization,createProduct)

export default router;