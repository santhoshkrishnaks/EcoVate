import mongoose from "mongoose";

const ecovisionSchema=mongoose.Schema({
    
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
    },

    project_lead_name:{
        type:String,
        required:true
    },

    contact_email:{
        type:String,
        required:true
    },

    contact_phone:{
        type:String,
        required:true
    },

    organisation_name:{
        type:String,
        required:true
    },

    project_title:{
        type:String,
        required:true
    },

    project_description:{
        type:String,
        required:true
    },

    problem_statement:{
        type:String,
        required:true
    },

    drivelink:{
        type:String,
        required:true
    }
},
    {
        timestamps:true
    })
export default ecovisionSchema;