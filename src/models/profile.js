import mongoose from "mongoose";

const profileSchema=new mongoose.Schema({
    username:String,
     email:String,
});

export const Profile= mongoose.models.users || mongoose.model("users",profileSchema);

