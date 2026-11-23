
import express from 'express'
import { register } from '../controllers/userController.js'


const router=express.Router()// Router level middleware

router.post('/register',register)


router.get('/contact',(req,res)=>{
    res.send("This is contact us page")
})


export default router;


