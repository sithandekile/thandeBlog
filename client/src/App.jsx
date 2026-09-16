import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Home from './pages/home';
const Blog = lazy(() => import('./pages/blog').then((module) => ({ default: module.Blog })));
const About = lazy(() => import('./pages/about').then((module) => ({ default: module.About })));
const Contact = lazy(() => import('./pages/contact').then((module) => ({ default: module.Contact })));
const Privacy = lazy(() => import('./pages/privacy').then((module) => ({ default: module.Privacy })));
// import { Subscribe } from './pages/subscribe';
// import Login from './pages/login';
// import Signup from './pages/signup';

function App() {

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-slate-950 dark:text-gray-100 sm:mx-auto">
    <Layout>
      {/*  Routes go here */}
      <Suspense fallback={<p className="p-6 text-center">Loading page...</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/security" element={<Privacy />} />
          <Route path="/blog/:category" element={<Privacy />} />
          {/* <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} /> */}
        </Routes>
      </Suspense>
    </Layout>
      </div>
  );
}
export default App;
