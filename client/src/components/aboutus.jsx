import React from 'react'
import { Link } from 'react-router-dom'

export const Aboutus = () => {
  return (
    <div className='bg-[#fef5f6] mx-4 md:mx-10 dark:bg-slate-900 px-5 md:px-10 py-12 md:py-20 grid grid-cols-1 md:grid-cols-2 items-start justify-between gap-8'>
        <div>
            <h1 className='font-extralight '>About us</h1>
              <h2 className='font-bold text-2xl md:text-3xl leading-10'>A space for thoughtful stories and ideas that stay with you</h2>
              <p>We bring together honest experiences, fresh perspectives, and lessons worth sharing. Our blog is for curious readers who enjoy discovering meaningful stories and finding inspiration in everyday life.</p>
                 <Link to="/about" className='bg-orange-700 dark:bg-orange-800 p-2 rounded-md mt-4 inline-block'>Learn About Us</Link>
       </div>
       <div>
           <h1 className='font-extralight'>Our Mission</h1>
           <h2 className='font-bold text-2xl md:text-3xl leading-10'>Making every story useful, relatable, and meaningful for curious readers everywhere</h2>
           <p>Our mission is to create thoughtful content that informs, encourages, and helps you see familiar experiences differently. We believe meaningful words can spark curiosity and connect people.</p>
       </div>
    </div>
  )
}
