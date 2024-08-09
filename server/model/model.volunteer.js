import mongoose from "mongoose";

const volunteerSchema=mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
     },
     phone:{
         type:String,
         required:true
     },
     address:{
        type:String,
        required:true
     },
     age:{
        type:Number,
        required:true
     },
     preferred_activities:{
        type:String,
        required:true 
     },
     availability:{
        type:String,
        required:true 
     },
     motivation:{
        type:String,
        required:false
     }
},{
    timestamps:true,
})
export default volunteerSchema;