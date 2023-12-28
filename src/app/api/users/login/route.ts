import {connect} from "@/dbconfig/dbconfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken"

connect()

export async function POST(request:NextRequest) {

    try {
        
        const reqBody= await request.json()
        const {roll,username,password}=reqBody;
        console.log(reqBody);

        //check user exist

        const user = await User.findOne({username,roll})
        if(!user){
            return NextResponse.json({error:"User does not exist or Roll does not match"},{status:400})
        }

        //check pass

        const validPassword= await bcryptjs.compare(password,user.password)
        if(!validPassword){
            return NextResponse.json({error:"Invalid Password"},{status:400})
        }

        //create token data

        const tokenData={
            id:user._id,
            roll:user.roll,
            username:user.username,
            email:user.email
        }

        //create token 

        const token = await jwt.sign(tokenData,process.env.TOKEN_SECRET!,{expiresIn:"1d"})

        const response= NextResponse.json({
            message:"Login successful",
            success:true,
        })

        response.cookies.set("token",token,{httpOnly:true})
        return response;


        

    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:500})
    }
    
}