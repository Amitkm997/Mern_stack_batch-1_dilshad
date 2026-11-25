import User from "../model/userSchema.js"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
const emailRegex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{8,}$/;

// Register
export const register=async(req,res)=>{

   try{
    console.log(req.body)
    const{name,email,password,role}=req.body
    if(!name){
        return res.status(404).json({
            message:"Name not  provided"
        })
    }

    if(!email){
        return res.status(404).json({
            message:"Email not provided"
        })
    }

    if(!emailRegex.test(email)){
        return res.status(400).json({
            message:"Invalid Email"
        })
    }  

    //role
    if(role!=="user" || role!=="admin"){
        res.status(400).json({
            success:false,
            message:"Role can only be either user or admin"
        })
    }

    //check if user already registered
    const existUser=await User.findOne({email});
    // console.log(existUser)
    if(existUser){
        return res.status(400).json({
            success:false,
            message:"User Already registered please login"
        })
    }
    
    //password check
    if(!password){
        return res.status(404).json({
            message:"Password not provided"
        })
    }


    //password regex
    if(!passwordRegex.test(password)){
        return res.status(400).json({
            message:`
            At least one lowercase letter
            At least one uppercase letter
            At least one digit
            At least one special character
            Only allowed characters, minimum 8 characters`
        })
    }
    
    //hashing password
    const hashedPassword=await bcrypt.hash(password,10);
     
    const user=await User.create({
        name,
        email,
        password:hashedPassword,
        role
    });
    return res.json({
        message:"User Registered successfully........",
        User:user
    })
   }catch(err){
       console.log(err)
   }
}


// login
export const login=async(req,res)=>{
    try{
      const{email,password}=req.body

      if(!email){
        return res.status(404).json({
            message:"Email not provided"
        })
    }

    if(!emailRegex.test(email)){
        return res.status(400).json({
            message:"Invalid Email"
        })
    }  

    const existsUser=await User.findOne({email})
    console.log(existsUser)
    if(!existsUser){
         return res.status(400).json({
            success:false,
            message:"User not Registered Kindly Register first"
         })
    }

    //password check
    if(!password){
        return res.status(404).json({
            message:"Password not provided"
        })
    }

    //password regex
    if(!passwordRegex.test(password)){
        return res.status(400).json({
            message:`
            At least one lowercase letter
            At least one uppercase letter
            At least one digit
            At least one special character
            Only allowed characters, minimum 8 characters`
        })
    }

    //password comapre
    const comparedPassword=await bcrypt.compare(password,existsUser.password);
    console.log(comparedPassword)
    
    if(!comparedPassword){
       return res.status(400).json({
       success:false,
       message:"Password You Entered is not correct"
       })
    }

    //JWT generation
    let payload={
        email,
        userId:existsUser._id
    }

    const token= jwt.sign(payload,process.env.SECRET_KEY,{expiresIn:"2d"});

    console.log(token);

    return res.status(200).json({
        token:token
    })


    }catch(error){
        console.log(error)
    }
}
