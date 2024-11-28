import myexpress from "express"
import dotenv from"dotenv"
import mongoose from "mongoose";

const app=myexpress();

app.use(myexpress.json());
dotenv.config();

mongoose.connect(process.env.MONGODBURL).then(()=>{
    console.log("Mongoose Connected")
})

app.listen(8000,()=>{
    console.log("Server running on port 8000")
})