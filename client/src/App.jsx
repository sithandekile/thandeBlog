import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Home from './pages/home';
import { Blog } from './pages/blog';
import { About } from './pages/about';
import { Contact } from './pages/contact';
import { Privacy } from './pages/privacy';
// import { Subscribe } from './pages/subscribe';
// import Login from './pages/login';
// import Signup from './pages/signup';

function App() {

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-slate-950 dark:text-gray-100 sm:mx-auto">
    <Layout>
      {/*  Routes go here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/security" element={<Privacy />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> */}
      </Routes>
    </Layout>
      </div>
  );
}
export default App;
