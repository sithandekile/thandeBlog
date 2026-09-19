import React from 'react'
import { Link } from 'react-router-dom'
import aboutheroImg from'../assets/abouthero.webp'
import unitedTeamImg from '../assets/unitedteam.webp'
import whyStartedImg from '../assets/whystarted.webp'
import { teamMembers } from '../data'

export const About = () => {
  return (
      <section>
        <div className='relative h-[50vh] min-h-[320px] w-full overflow-hidden'>
          <img
            src={aboutheroImg}
            alt="team members at work in a creative space"
            aria-hidden="true"
            loading="eager"
            fetchPriority="high"
            className='absolute inset-0 h-full w-full object-cover object-center'
          />
          <div className='relative z-10 flex h-full items-end bg-black/30 px-5 pb-10 md:px-10 md:pb-16'>
            <div className='max-w-3xl text-white'>
              <h1 className='text-3xl font-bold md:text-5xl'>About Thande&apos;s Blog</h1>
              <p className='mt-4 max-w-2xl text-base md:text-xl'>A thoughtful space for practical ideas, honest experiences, and fresh perspectives that help curious people learn, reflect, and move forward.</p>
            </div>
          </div>
        </div>
        <div className='mx-auto grid max-w-6xl grid-cols-1 gap-8 px-5 py-12 md:grid-cols-2 md:px-10'>
          <div>
            <h2>Our Mission</h2>
            <p>We publish practical articles about technology, business, startups, the economy, nature, and personal growth. Our content is written for curious readers, students, creators, and professionals who want useful ideas they can apply in everyday life.</p>
          </div>
          <div>
            <h2>Our Vision</h2>
            <p>We aim to build a trusted space for people exploring new ideas, developing their careers, starting projects, or simply learning something different. Each article combines clear explanations, relatable experiences, and practical insight to help readers make informed choices and keep moving forward.</p>
          </div>
        </div>
        <div className='flex flex-wrap items-center justify-center gap-4 px-5 pb-12 md:px-10'>
          <Link to='/blog' className='inline-flex items-center justify-center rounded bg-orange-800 px-6 py-3 font-medium text-white transition-colors hover:bg-orange-700'>
            Explore Articles
          </Link>
          <Link to='/contact' className='inline-flex items-center justify-center rounded border border-orange-800 px-6 py-3 font-medium text-orange-800 transition-colors hover:bg-orange-800 hover:text-white'>
            Contact Us
          </Link>
          <Link to='/share-story' className='font-medium text-orange-800 underline underline-offset-4 hover:text-orange-700'>
            Share Your Story
          </Link>
        </div>
        <div className='grid grid-cols-1 items-start gap-10 bg-[#fef5f6] px-5 py-12 dark:bg-slate-900 md:grid-cols-2 md:px-10'>
          <div className='order-1'>
            <h2 className='font-extralight'>Meet Our Team</h2>
            <h3 className='font-bold text-xl md:text-2xl'>
              A small team with different perspectives and one shared purpose.
            </h3>
            <p>Our team brings together writers, editors, researchers, and designers who transform everyday experiences into clear, meaningful stories. We listen closely, question assumptions, and learn from different communities and perspectives. Each article is shaped with care to inform readers, encourage reflection, and offer practical insight they can carry into daily life.</p>
            <div className='mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3'>
              {teamMembers.map((member) => (
                <div key={member.id} className='rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800'>
                  <h3 className='font-bold'>{member.name}</h3>
                  <p className='mt-1 text-sm text-slate-700 dark:text-slate-300'>{member.role}</p>
                </div>
              ))}
            </div>
          </div>
          <div className='order-3 md:order-2 '>
            <img src={whyStartedImg} alt='A creative workspace where the blog began' className='mx-auto h-64 w-full max-w-2xl object-cover' />
          </div>
          <div className='order-2 hidden md:block md:order-3'>
            <img src={unitedTeamImg} alt='Our team collaborating' className='mx-auto h-64 w-full max-w-2xl object-cover' />
          </div>
          <div className='order-4 flex flex-col justify-center'>
            <h2 className='font-extralight'>Why we started</h2>
            <h3 className='font-bold text-xl md:text-2xl'>
              A blog born from curiosity, experience, and a desire to connect.
            </h3>
            <p>We started with a simple belief: everyone has experiences worth sharing, and every reader deserves content that feels honest, useful, and personal. What began as a small collection of ideas has grown into a space for reflection, learning, and connection. We hope each story encourages you to pause, question, and grow.</p>
          </div>
        </div>
      </section>
    
  )
}
