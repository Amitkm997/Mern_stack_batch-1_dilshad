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

export const getProductById=async(req,res)=>{
   try{
      console.log(req.params.id)

      const product=await Product.findById(req.params.id)

      return res.status(200).json({
         success:true,
         message:"Product Received successfully",
         product:product
      })
   }catch(error){
      return res.status(500).json({
         success:false,
         message:error.message
      })
   }
}

export const updateProduct=async(req,res)=>{
   try{
      const product=await Product.findByIdAndUpdate(req.params.id,req.body,{new:true});
      res.status(200).json({
         success:true,
         message:"Product updated successfully",
         product:product
      })
   }catch(error){
      return res.status(500).json({
         success:false,
         message:error.message
      })
   }
}