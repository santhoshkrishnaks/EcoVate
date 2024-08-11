import mongoose from "mongoose";

const volunteerSchema=mongoose.Schema({
     username:{
      type:String,
      required:true,
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