
import express from 'express'
import useRoutes from './routes/userRoutes.js'
import morgan from 'morgan';
import productRoute from './routes/productRoutes.js'
import { mongoDB } from './config/db.js'
import dotenv from 'dotenv'
//connection error with mongodb
import dns from 'node:dns'
dns.setServers(["8.8.8.8", "1.1.1.1"]);

dotenv.config()

const app=express(); // express is initilized

app.use(express.json())// Build-in middleware (parse the incoming data from the from the frontend)

const PORT=process.env.PORT;

mongoDB() // mongodb connection

app.use(morgan('tiny')) // third party middleware 
// app.use((req,res,next)=>{
//     console.log("application level middleware called....");
//     next()
// })

// app.get('/',(req,res,next)=>{
//     console.log("authenticated");
//     next()
// },(req,res,next)=>{
//     console.log("authorization")
    
// },(req,res)=>{
//     res.send("Loggen in!")
// })


// function authenticated(req, res, next) {
//   console.log("authentication");
//   next();
// }

// function authentication(req, res, next) {
//   console.log("authorization");
//   next();
// }

// let loggedin=[authenticated,authentication]

// app.get('/user/:id',loggedin, (req, res) => {
//   res.send('User Info');
// });

app.use('/api/user',useRoutes)
app.use('/api/product',productRoute)


app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`)
})


