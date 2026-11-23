
// const fs=require("fs");

// fs.writeFile("text.txt","Hello world!",(err)=>{
//     if(err) return "Error!"
//     console.log("File created successfully")
// })

// fs.readFile("text.txt","utf8",(err,data)=>{
//    if(err) return "Error!"
//    console.log(data)
// })

const http=require("http");


const server=http.createServer('/about',(req,res)=>{
   res.end("server started successfully!")
})

server.listen(8080,()=>{
    console.log("Server Running on Port 8080")
})