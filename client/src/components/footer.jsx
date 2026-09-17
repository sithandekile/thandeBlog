import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
  <footer className="bg-sky-950 dark:bg-slate-950 shadow px-4 md:px-6">
   <div className='flex flex-col gap-4 py-4 text-white md:flex-row md:items-center md:justify-between'>
       <div className="">
        <h1 className="text-3xl font-bold rounded-full "><Link to="/">MYBLOG</Link></h1>
       </div>
       <div className="flex justify-between items-center">
          <ul className="flex flex-wrap gap-4">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact us</Link></li>
            <li><Link to="/security">Privacy and Policy</Link></li>
          </ul>
          </div>
    </div>
    <div className='flex flex-col gap-4 bg-slate-800 dark:bg-slate-900 md:flex-row items-center md:justify-between my-6 md:my-10 mx-0 md:mx-20 py-8 px-5'>
      <h2 className='font-bold text-center text-white md:text-left md:text-3xl text-xl'>Subscribe to our news letter to get latest updates</h2>
      <input type='email'name='email' onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Your Email'
      className='p-2 bg-white text-slate-900 w-full md:w-1/3'/>
      <Link to="/subscribe" className='bg-orange-800 p-2 rounded-md text-white'>Subscribe</Link>
      
    </div>
    <p className="text-center text-gray-300 dark:text-gray-300">
       © {new Date().getFullYear()} Thande's Blog App. All rights reserved.
    </p>
 </footer>
  )
}
