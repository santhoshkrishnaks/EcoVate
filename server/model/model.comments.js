import mongoose from "mongoose";

const commentSchema=new mongoose.Schema({
    post_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"ecoconnect",
        required:true
    },
    comment:{
        type:[String],
        required:false
    },
    likes:{
        type:Number,
        required:false
    }
},{
    timestamps:true,
})
export default commentSchema;