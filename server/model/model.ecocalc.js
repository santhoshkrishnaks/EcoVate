import mongoose from "mongoose";

const ecocalcSchema=mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
     },
     footprint:{
        type:Number,
        required:true,
     }
},
{
    timestamps:true,

})
export default ecocalcSchema;