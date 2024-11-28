import { model, Schema } from "mongoose";

 const template=new Schema({
    name:String,
    content:String,
    date:String,
    type:String
 })

 const templatemodel=model("templatemodel",template)
 export default templatemodel;