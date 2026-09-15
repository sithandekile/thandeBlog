import React from 'react'
import { Link } from 'react-router-dom'
import { useglobal } from '../context/globalContext'
import { Card } from './Card'

export const LatestPosts = () => {
    const { posts, postsLoading, postsError } = useglobal()
    const filteredPosts = posts?.filter(item => item.createdAt > Date.now() - 7 * 24 * 60 * 60 * 1000).slice(0, 3)
  return (
    <section className="my-10 mx-4 md:mx-20">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold">Latest Posts</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">A few ideas and stories to begin with.</p>
        </div>
        <Link to="/blog" className="font-medium text-orange-700 underline underline-offset-4 dark:text-orange-400">View all posts</Link>
      </div>
      {postsLoading && <p className="text-gray-600 dark:text-gray-300">Loading latest posts...</p>}
      {postsError && <p className="text-red-600">{postsError}</p>}
      {!postsLoading && !postsError && filteredPosts.length === 0 && (
        <p className="text-gray-600 dark:text-gray-300">No latest posts are available yet.</p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts?.map(post => (
          <Card key={post.id || post._id} cardItems={post} />
        ))}
      </div>
    </section>
  )
}
