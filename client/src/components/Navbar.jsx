import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './themeToggle';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className=" bg-sky-950 text-white dark:bg-slate-900 dark:text-gray-100 p-4 shadow-lg flex flex-wrap items-center justify-between gap-3 sticky top-0 left-0 right-0 z-10">
      <div className="px-2 md:px-6">
        <h1 className="text-2xl md:text-3xl font-bold rounded-full "><Link to="/">MYBLOG</Link></h1>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="rounded p-2 hover:bg-white/10 md:hidden"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <nav className={`${isMenuOpen ? 'block' : 'hidden'} absolute left-0 right-0 top-full bg-sky-950 px-6 pb-4 dark:bg-slate-900 md:static md:block md:bg-transparent md:p-0 md:dark:bg-transparent`}>
            <ul className="flex flex-col gap-4 text-sm md:flex-row md:items-center md:gap-4 md:p-4 md:text-base">
              <li><Link to="/" onClick={closeMenu}>Home</Link></li>
              <li><Link to="/blog" onClick={closeMenu}>Blog</Link></li>
              <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
              <li><Link to="/contact" onClick={closeMenu}>Contact us</Link></li>
              <li><Link to="/subscribe" onClick={closeMenu} className='inline-block rounded bg-orange-700 px-2'>Subscribe</Link></li>
            </ul>
          </nav>
          <ThemeToggle />
        </div>
    </header>
  );
}
