"use client";

import { useState } from "react";

export default function Home(){
    const [file,setFile]=useState<file>()

    const onSubmit=(e:any)=>{
        e.preventDefault();
    }
    return(
        <main>
            <h1>Upload Image</h1>
            <form onSubmit={onSubmit}>
                <input type="file" name="file" onChange={(e:any)=>setFile(e.target.files?.[0])}/>
                <button type="submit">Upload</button>
            </form>
        </main>
    )
}