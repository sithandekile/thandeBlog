import React from 'react'
import heroImage from '../assets/bloghero.webp'
import { Link } from 'react-router-dom'

export const Hero = () => {
  return (
    <div className='relative h-screen w-full overflow-hidden'>
        <img
          src={heroImage}
          alt=""
          aria-hidden="true"
          loading="eager"
          fetchPriority="high"
          className='absolute inset-0 h-full w-full object-cover object-center'
        />
        <div className='relative z-10 h-full w-full px-5 pt-20 text-white md:w-1/2 md:pl-11'>
        <h1 className='font-bold text-2xl md:text-4xl text-[#5E5E5E]'>
            Discover Fresh Perspectives, <span className='text-orange-700'>
            Thoughtful Stories</span>, and Practical Ideas That Inspire Curiosity
        </h1>
        <p className='text-sm md:text-xl text-slate-800 mb-10'>
            Take a moment to slow down, read something meaningful, 
            and find stories that connect with where you are today.
            Let each story encourage growth and help you see everyday experiences differently.
        </p>
        <div className='flex flex-wrap items-center gap-4'>
          <Link to='/blog' className='inline-flex items-center justify-center rounded bg-orange-700 px-6 py-3 font-medium text-white transition-colors hover:bg-orange-600'>
            Explore Articles
          </Link>
          <Link to='/share-story' className='font-medium text-slate-800 underline underline-offset-4 transition-colors hover:text-orange-700'>
            Share Your Story
          </Link>
          <a href='#categories' className='font-medium text-slate-800 underline underline-offset-4 transition-colors hover:text-orange-700'>
            Browse Categories
          </a>
        </div>
        <a href='#categories' className='absolute bottom-8 left-1/2 -translate-x-1/2 text-sm font-medium text-slate-800 underline underline-offset-4 md:hidden'>
          Scroll to explore
        </a>
        </div>
    </div>
  )
}
