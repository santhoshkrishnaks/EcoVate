import mongoose from "mongoose";

const ecoconnectSchema=mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.String,
        ref:'User',
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    tags:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        required:true,
    },
    organization:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        required:true,
    },
    contactEmail:{
        type:String,
        required:true,
    }
},
{
    timestamps:true,
}
)
export default ecoconnectSchema;