
import jwt, { decode } from 'jsonwebtoken'
import User from '../model/userSchema.js';
export const authentication=(req,res,next)=>{
    const authToken=req.headers.authorization;
    // console.log(authToken)

    // step 1:
    if(!authToken){
        res.status(401).json({
            success:false,
            message:"You are not Authenticated"
        })
    }


    //step2: verifying the token
    const decodedToken=jwt.verify(authToken,process.env.SECRET_KEY)
    // console.log(decodedToken)

    req.user=decodedToken
    next()

}



export const authorization=async(req,res,next)=>{
    // console.log(req.user)

    const loggedInUser=await User.findById(req.user.userId);
    console.log(loggedInUser)

    if(loggedInUser.role!="admin"){
       res.status(403).json({
        success:false,
        message:"Unauthorized Access"
       })
    }

    next()


}