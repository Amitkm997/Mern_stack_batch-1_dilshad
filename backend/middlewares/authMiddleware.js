import jwt from 'jsonwebtoken'
import User from '../model/userSchema.js'
export const authentication = (req, res, next) => {
    const authToken = req.headers.authorization;
    // console.log(authToken)

    if (!authToken) {
        return res.status(401).json({
            success: false,
            message: "Invalid User"
        })
    }

    //token extraction
    const parts = authToken.split(" ")

    if (parts.length !== 2 || parts[0] !== "Bearer") {
        res.status(401).json({
            success: false,
            message: "Invalid authorization header"
        })
    }
    const token = parts[1]
    try {
        // Step 3: Verify token
        const decodedToken = jwt.verify(
            token,
            process.env.SECRET_KEY,
            {
                algorithms: ['HS256']
            });

        req.user = decodedToken;
        next()
    } catch (error) {
        return res
            .status(401)
            .json({
                message: "Token expired. Please login again."
            });
    }

}



export const authorization = async(req, res, next) => {
    console.log(req.user)

    try{
       const user=await User.findById(req.user.userId);

       if(user.role!=="admin"){
          return res.status(403).json({
            success:false,
            message:"Access Restricted"
          })
       }

       next()
    }catch(error){
        return res.status(403).json({
            message:"Unauthoriced Access"
        })
    }

}