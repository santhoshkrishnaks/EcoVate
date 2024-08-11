import mongoose from "mongoose";

const ecoconnectSchema=mongoose.Schema({
    post_title:{
        type:String,
        require:true
    },
    username:{
        type:String,
        required:true,
    },
    image_url:{
        type:String,
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

ecoconnectSchema.statics.findByuser=function(name){
    return this.where({username: new RegExp(name,"i")})
}
export default ecoconnectSchema;