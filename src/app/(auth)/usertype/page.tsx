import React from 'react'
import "../../globals.css"
import Link from 'next/link'

const page = () => {
  return (
    <>
    <div className='head-text mt-4  flex items-center justify-center'>
        <h1> MIT ADT UNIVERSITY</h1>
        <h1></h1>
    </div>
     <div className='mt-10 gap-14 flex items-center justify-center'>
        <Link href="/adminlogin" className='bg-sky-500 px-4 py-2 rounded-md'>Admin</Link>
        <Link href="/login" className='bg-sky-500 px-4 py-2 rounded-md'>Mentor</Link>
        <Link href="/menteelogin" className='bg-sky-500 px-4 py-2 rounded-md'>Mentee</Link>
        <Link  href="/login" className='bg-sky-500 px-4 py-2 rounded-md'>Class Teacher</Link>

     </div>
     

    </>
  )
}

export default page
