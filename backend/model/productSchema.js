import mongoose from 'mongoose';

const productSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true,
        default:0,
        min:0
    },
    image:[{
        url:{type:String,required:true},
        alt:String
    }],
    numReview:{
        type:Number,
        default:0
    },
    isActive:{
        type:Boolean,
        default:true
    }

},{timestamps:true})


const Product=mongoose.model('product',productSchema);

export default Product;