import { lazy, Suspense } from 'react'
import { Hero } from '../components/hero'
const Categories = lazy(() => import('../components/categories'))
const Aboutus = lazy(() => import('../components/aboutus').then((module) => ({ default: module.Aboutus })))
const LatestPosts = lazy(() => import('../components/latestPosts').then((module) => ({ default: module.LatestPosts })))


export default function Home() {
  return (
      <>
        <Hero/>
        <Suspense fallback={<p className="p-6 text-center">Loading more stories...</p>}>
          <Categories/>
          <LatestPosts/>
          <Aboutus/>
        </Suspense>
      </>
  )
}
