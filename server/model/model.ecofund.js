import mongoose from "mongoose";

const ecofundSchema=mongoose.Schema({
    ecoconnect:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'ecoconnect',
        required:false
    },
    payment_type:{
        type:String,
        required:true
    },
    amount:{
        type:String,
        required:true
    },
    payment_method:{
        type:String,
        required:true
    },
    transaction_id:{
        type:String,
        required:true
    },

},{
    timestamps:true,
})
export default ecofundSchema;