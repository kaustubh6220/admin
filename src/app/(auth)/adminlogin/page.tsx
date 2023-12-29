"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";


export default function LoginPage(){

    const route =useRouter();

    const [user,setUser]= React.useState({
        roll:"admin",
        username:"",
        password:"",

    })

    const [buttonDisabled,setButtonDisabled]=React.useState(false);
    const [loading, setLoading]=React.useState(false);

    const onLogin= async()=>{

        try {

            setLoading(true);
            const response=await axios.post("/api/users/login",user);
            console.log("Login success",response.data);
            toast.success("Login success");
            route.push("/")
            
        } catch (error:any) {
            
            console.log("Login failed",error.message);
            toast.error(error.message);            
        }finally{
            setLoading(false);
        }

    }

    useEffect(()=>{
        if(user.username.length>0 && user.password.length>0 ){
            setButtonDisabled(false);
        }else{
            setButtonDisabled(true);
        }
    },[user]);

    return(

        <div className="flex flex-col justify-center items-center h-screen w-screen">
            <h1>{loading ? "Processing":"Signup"}</h1>

            
            

            <label htmlFor="username">username</label>
            <input className="p-4 flex"
                type="text" 
                id="username"
                value={user.username}
                onChange={(e)=>setUser({...user, username:e.target.value})} 
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
                onClick={onLogin}
                className="p-2 bg-slate-600 hover:bg-slate-400 mt-4 rounded-md text-lime-50" type="submit">Login</button>
                <Link className="mt-4 hover:text-blue-300" href="/signup">Visit Signup Page</Link>
        </div>
    )
}