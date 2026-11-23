import User from "../model/userSchema.js"
const emailRegex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{8,}$/;
export const register=async(req,res)=>{

   try{
    console.log(req.body)
    const{name,email,password}=req.body
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

    if(!password){
        return res.status(404).json({
            message:"Password not provided"
        })
    }

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

    const user=await User.create(req.body);
    return res.json({
        message:"User Registered successfully........",
        User:user
    })
   }catch(err){
       console.log(err)
   }
}


