import { createContext, useContext, useState, useEffect } from 'react';
import { posts as localPosts } from '../data';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [postsLoading, setPostsLoading] = useState(true);
  const [postsError, setPostsError] = useState('');
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const root = window.document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setPostsLoading(true);
        setPostsError('');

        setPosts(localPosts);
      } catch {
        setPostsError('Unable to load posts.');
      } finally {
        setPostsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const toggleThemeMode = () => setDarkMode(prev => !prev);


  return (
    <ThemeContext.Provider value={{ darkMode, toggleThemeMode, posts, postsLoading, postsError }}>
      {children}
    </ThemeContext.Provider>
  );
};
export const useglobal=()=>useContext(ThemeContext)
