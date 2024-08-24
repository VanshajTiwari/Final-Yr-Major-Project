import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    profile : {
        type : String
    },
    email : {
        type : String,
        required : true,
    },
    password : {
        type : String,
        required : true
    }
}, {timestamps : true});

export const User = new mongoose.model('User' , userSchema);