import mongoose from "mongoose";

const ecofundSchema=mongoose.Schema({

    username:{
        type:String,
        required:true,
    },
    post_title:{
        type:String,
        required:true,
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