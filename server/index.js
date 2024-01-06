import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import useRouter from "./routes/users.js"
import videoRouter from "./routes/videos.js"
import commentRouter from "./routes/comments.js"
import authRouter from "./routes/auth.js"
import cookieParser from "cookie-parser"


const app=express()
dotenv.config()


const connect=()=>{
    mongoose.connect(process.env.MONGO).then(()=>{
        console.log("Connect to DB")
    }).catch((err)=>{
        throw err;
    })
}
app.use(cookieParser())
app.use(express.json())

app.use("/api/users",useRouter)
app.use("/api/videos",videoRouter)
app.use("/api/comments",commentRouter)
app.use("/api/auth",authRouter)

app.use((err,req,res,next)=>{
   const status=err.status || 500;
   const message=err.message || "Something went wrong";
   return res.status(status).json({
    success:false,
    status,
    message
   })

})






app.listen(8800,()=>{
    connect()
    console.log("connected to server")
})