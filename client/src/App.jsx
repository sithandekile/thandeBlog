import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import { ProtectedRoutes } from './utils/protectedRoutes';
import Home from './pages/home';

const Blog = lazy(() => import('./pages/blog').then((module) => ({ default: module.Blog })));
const About = lazy(() => import('./pages/about').then((module) => ({ default: module.About })));
const Contact = lazy(() => import('./pages/contact').then((module) => ({ default: module.Contact })));
const Privacy = lazy(() => import('./pages/privacy').then((module) => ({ default: module.Privacy })));
const CategoryPage = lazy(() => import('./pages/categoryPage').then((module) => ({ default: module.CategoryPage })));
const Login = lazy(() => import('./pages/login').then((module) => ({ default: module.default })));
const Signup = lazy(() => import('./pages/signup').then((module) => ({ default: module.default })));
const ShareStory = lazy(() => import('./pages/shareStory').then((module) => ({ default: module.ShareStory })));

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-slate-950 dark:text-gray-100 sm:mx-auto">
      <Layout>
        <Suspense fallback={<p className="p-6 text-center">Loading page...</p>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/security" element={<Privacy />} />
            <Route path="/blog/:category" element={<CategoryPage />} />
            <Route path="/sign-in/*" element={<Login />} />
            <Route path="/sign-up/*" element={<Signup />} />
            <Route
              path="/share-story"
              element={
                <ProtectedRoutes>
                  <ShareStory />
                </ProtectedRoutes>
              }
            />
          </Routes>
        </Suspense>
      </Layout>
    </div>
  );
}

export default App;
