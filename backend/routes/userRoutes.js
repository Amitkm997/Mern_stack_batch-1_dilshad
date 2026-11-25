
import express from 'express'
import { register,login } from '../controllers/userController.js'


const router=express.Router()// Router level middleware

router.post('/register',register)
router.post('/login',login)


router.get('/contact',(req,res)=>{
    res.send("This is contact us page")
})


export default router;


