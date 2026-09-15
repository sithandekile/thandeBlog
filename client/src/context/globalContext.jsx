import { createContext, useContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [posts,setPosts]=useState([])
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

  const toggleThemeMode = () => setDarkMode(prev => !prev);


  return (
    <ThemeContext.Provider value={{ darkMode, toggleThemeMode,posts }}>
      {children}
    </ThemeContext.Provider>
  );
};
export const useglobal=()=>useContext(ThemeContext)
