import express from 'express'
import { createProduct,getProductById,updateProduct } from '../controllers/productController.js';
import { authentication,authorization } from '../middlewares/authMiddleware.js';
const router=express.Router();

router.post('/',authentication,authorization,createProduct)
router.get('/:id',getProductById)
router.put('/:id',authentication,authorization,updateProduct)


export default router;