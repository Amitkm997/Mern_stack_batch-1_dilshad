import mongoose from "mongoose"

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    age:{
       type:Number,
       min:1,
       max:120
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:"User"
    }
},{timestamps:true})

const User=mongoose.model("User",userSchema);

export default User;