// import { useContext } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './themeToggle';

export default function Navbar() {

  return (
    <header className="bg-sky-950 text-white dark:bg-slate-900 dark:text-gray-100 p-4 shadow-lg flex items-center justify-between sticky top-0 left-0 right-0 z-10">
      <div className="px-6 lg:flex justify-between">
        <h1 className="text-3xl font-bold rounded-full "><Link to="/">MYBLOG</Link></h1>
        </div>
        <div className="flex items-center">
          <ul className="flex space-x-4 p-4 text-white dark:text-gray-100">
            <Link to="/"><li>Home</li></Link>
            <Link to="/blog"><li>Blog</li></Link>
            <Link to="/about"><li>About Us</li></Link>
            <Link to="/contact"><li>Contact us</li></Link>
            <Link to="/subscribe"><li>Subscribe</li></Link>
          </ul>
          <ThemeToggle />
        </div>
    </header>
  );
}
