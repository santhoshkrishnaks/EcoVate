import mongoose from "mongoose";

const volunteerSchema=mongoose.Schema({

   email_address:{
      type:String,
      required:true,
   },
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
        type:[mongoose.Schema.Types.Mixed],
        required:false,
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