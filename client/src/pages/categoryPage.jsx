import React,{useState,useEffect} from 'react'
import { posts } from '../data'
import { useParams } from 'react-router-dom'
import { Card } from '../components/Card'

export const CategoryPage = () => {
    const {category}=useParams()
    const [filteredPosts,setFilteredPosts]=useState([])

    useEffect(()=>{
        const filter=posts.filter((item) => String(item.category || "").toLowerCase()===String(category || "").toLowerCase())
        setFilteredPosts(filter)
    },[category])
  return (
    <div>
      <h1 className='text-3xl font-bold my-20'>Products in {category}</h1>
      {filteredPosts.map(post=>(
        <div key={post.id || post._id}>
          <Card cardItems={post}/>
        </div>
      ))}
    </div>
  )
}
