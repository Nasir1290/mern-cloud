import mongoose, { Schema } from "mongoose";

const user = new Schema({
    name:{
        type:String,
        required:true,
    },
    roll:{
        type:Number,
        unique:true,
        required:true,
    }
})

export const userData = mongoose.model('userData',user)