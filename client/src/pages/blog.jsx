import React from 'react'
import {Card} from '../components/Card'
import { useglobal } from '../context/globalContext'

export const Blog = () => {
  const {posts}=useglobal()
  return (
    <main className='grid grid-cols-1 md:grid-cols-3 gap-4'>
     {posts?.map(post=>(
        <Card key={post.id || post._id} cardItems={post}/>
      
     ))}
    </main>
  )
}
