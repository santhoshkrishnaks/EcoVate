import mongoose from "mongoose";

const commentSchema=new mongoose.Schema({
    post_id:{
        type:String,
        required:true
    },
    comment:[{
        username:{
            type:String,
            required:true
        },
        content:{
            type:String,
            required:true,
        }
    }],
    likes:{
        type:Number,
        required:false
    }
},{
    timestamps:true,
})
export default commentSchema;