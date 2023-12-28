import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,"Please provide Username"],
        unique:true,
    },

    email:{
        type:String,
        required:[true,"Please provide email"],
        unique:true,
    },

    password:{
        type:String,
        required:[true,"Please provide email"],
    },

    image:{
        type:String
    },
    signature:{
        type:String
    },
    age:{
        type:String
    },
    gender:{
        type:String
    },
    name:{
        type:String
    },
    mobileno:{
        type:String
    },
    dateofbirth:{
        type:Date
    },

    isVerified:{
        type:Boolean,
        default:false,
    },

    isAdmin:{
        type:Boolean,
        default:false,
    },

    forgotPasswordToken:String,
    forgotPasswordTokenExpiry:Date,
    verifyToken:String,
    verifyTokenExpiry:Date,

})

const User = mongoose.models.users || mongoose.model("users",userSchema);

export default User;