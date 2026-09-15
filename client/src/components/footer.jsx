import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
   <footer className="bg-sky-950 dark:bg-slate-950 shadow px-6">
    <div className='flex items-center justify-between text-white'>
       <div className="">
        <h1 className="text-3xl font-bold rounded-full "><Link to="/">MYBLOG</Link></h1>
       </div>
       <div className="flex justify-between items-center">
          <ul className="flex space-x-4 p-4">
            <Link to="/"><li>Home</li></Link>
            <Link to="/blog"><li>Blog</li></Link>
            <Link to="/about"><li>About Us</li></Link>
            <Link to="/contact"><li>Contact us</li></Link>
            <Link to="/security"><li>Privacy and Policy</li></Link>
          </ul>
          </div>
    </div>
    <div className='flex flex-col md:flex-row items-center md:justify-between mx-20 py-10 px-5 bg-white/20'>
      <h2 className='font-bold md:text-3xl text-xl'>Subscribe to our news letter to get latest updates</h2>
      <input type='email'name='email' onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Your Email'/>
      <Link to="/subscribe">Subscribe</Link>
      
    </div>
    <p className="text-center text-gray-500 dark:text-gray-400">
       © {new Date().getFullYear()} Thande's Blog App. All rights reserved.
    </p>
 </footer>
  )
}
