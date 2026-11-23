import Product from "../model/productSchema.js"

export const createProduct=async(req,res)=>{
   try{
     const product=await Product.create(req.body);
     res.status(201).json({
        message:"product added successfully",
        product:product
     })
   }catch(err){
    res.status(500).json({
        message:"Internal Server Error",
        error:err
    })
   }
}