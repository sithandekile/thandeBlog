import React from 'react'
import { Hero } from '../components/hero'
import Categories from '../components/categories'
import { Aboutus } from '../components/aboutus'
import { LatestPosts } from '../components/latestPosts'


export default function Home() {
  return (
      <main>
        <Hero/>
        <Categories/>
        <LatestPosts/>
        <Aboutus/>
      </main>
  )
}
