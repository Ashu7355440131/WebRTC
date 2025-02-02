import express from "express";
import cors from "cors";
import {createServer} from "node:http";
import {Server} from "socket.io";
import mongoose from "mongoose";
import {connectToSocket} from "./controllers/socketManager.js";


const app=express();
const server=createServer(app);
const io=connectToSocket(server);
import userRoutes from "./routes/userRoutes.js";





app.set("port",(process.env.PORT||8000));
app.use(cors());
app.use(express.json({limit:"40kb"}));
app.use(express.urlencoded({limit:"40kb",extended:true}));
app.use("/api/v1/users",userRoutes);






const start=async()=>{
    const connectionDb=await mongoose.connect("mongodb+srv://ashutosh7355vns:U7DFfu51LGfmriC6@webrtcpartone.hu6yl.mongodb.net/?retryWrites=true&w=majority&appName=WebRTCPartOne");
    console.log(`Mongo Connected DB Host:${connectionDb.connection.host}`);
    server.listen(app.get("port"),()=>{
        console.log(`Server is listening at port ${8000}`);
    })
}

start();