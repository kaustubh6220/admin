"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";


export default function SignupPage(){
    const router=useRouter();
    const [user,setUser]= React.useState({
        email:"",
        password:"",
        username:"",
    })

    const [buttonDisabled,setButtonDisabled]=React.useState(false);
    const [loading, setLoading]=React.useState(false);

    const onSignup= async()=>{
        try {
            
            setLoading(true);
            const response=await axios.post("/api/users/signup",user);
            console.log("Signup success",response.data);
            router.push("/login")
            
        } catch (error:any) {

            console.log("Signup failed",error.message);
            toast.error(error.message);

        }finally{

            setLoading(false);
        }

    }

    useEffect(()=>{
        if(user.email.length>0 && user.password.length>0 && user.username.length>0){
            setButtonDisabled(false);
        }else{
            setButtonDisabled(true);
        }
    },[user]);


    return(

        <div className="flex flex-col justify-center items-center h-screen w-screen">
            <h1>{loading ? "Processing":"Signup"}</h1>
            <label htmlFor="username">Username</label>
            <input className="p-4 flex"
                type="text" 
                id="username"
                value={user.username}
                onChange={(e)=>setUser({...user, username:e.target.value})} 
                placeholder="username"     
                />

            <label htmlFor="email">Email</label>
            <input className="p-4 flex"
                type="text" 
                id="email"
                value={user.email}
                onChange={(e)=>setUser({...user, email:e.target.value})} 
                placeholder="email"     
                />

            <label htmlFor="password">Password</label>
            <input className="p-4 flex"
                type="password" 
                id="password"
                value={user.password}
                onChange={(e)=>setUser({...user, password:e.target.value})} 
                placeholder="password"     
                />
            <button 
                onClick={onSignup}
                className="p-2 bg-slate-600 hover:bg-slate-400 mt-4 rounded-md text-lime-50" type="submit">{buttonDisabled ? "No Signup":"Signup"}</button>
                <Link className="mt-4 hover:text-blue-300" href="/login">Visit Login Page</Link>
        </div>
    )
}