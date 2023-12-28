'use client';
import React from 'react'
import { useState } from 'react';
import {AiOutlineDashboard} from 'react-icons/ai'

import Link from 'next/link';
import {sidebarLinks} from "@/constants/";
import Image from "next/image";

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import axios from 'axios';
import toast from 'react-hot-toast';


function LeftSidebar(){
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen]= useState(false);

  const logout=async ()=>{
        
    try {

         await axios.get("/api/users/logout")
         toast.success("Logout Succesful")
         router.push("/login")
        
    } catch (error:any) {
        console.log(error.message);
        toast.error(error.message)
        
    }

}

  return (   <>
    
              <div className=''>
                <svg className="h-9 w-9 text-dark-1 ml-7 absolute flex flex-row -right-0 top-3 "  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" onClick={()=> setOpen(!open)}/>
                </svg>

                
                {/* <AiOutlineDashboard className={`bg-white mt-0 text-4xl rounded cursor-pointer float-left mr-2 duration-300 ${ open && 'rotate-[360deg]'}`}/>
                <h1 className={`origin-left  font-semibold text-white rounded duration-500 ${!open && "scale-0"}`}>Admin Dashboard</h1> */}
              </div>
              
              <section className={`custom-scrollbar leftsidebar ${open ? " w-64 max-lg:w-36" : "w-20 max-lg:hidden"}  duration-200`}>

                <div className="flex relative w-full flex-1 flex-col gap-6 px-6">
                {sidebarLinks.map((link) => {
                    const isActive= (pathname.includes(link.route) && link.route.length > 1) || pathname==link.route;


                    return(
                      <div>
                        <Link href={link.route} 
                              key={link.route} 
                              className={`leftsidebar_link  ${isActive && ' bg-slate-400'}`}
                              >
                            <Image 
                                src={link.imgURL} 
                                alt={link.label} 
                                width={24} 
                                height={24}
                                />                      
                            <p className={`text-light-1 text-small-medium ${isActive && ' max-lg:bg-slate-400'}  ${!open && 'hidden'}`}>
                                {link.label}</p>  
                        </Link>
                    </div>
                    
                )}
                )}
                </div>
                <div>
                <div className="mt-10 px-6">
                  <div className='flex cursor-pointer gap-4 p-4'>
                    

                    <Image onClick={logout}  src="/assets/logoutw.svg" alt="logout" width={24} height={24}/>

                    <p onClick={logout} className={`text-light-1 text-small-medium ${!open && 'hidden'}`}>
                                Logout</p> 

                    

                  </div>
                </div>
                </div>
                
                          
            
            
              
          </section>
          </>
  )
}

export default LeftSidebar
