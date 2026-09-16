import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5"
import { useglobal } from "../context/globalContext"

export default function ThemeToggle(){
    const {darkMode,toggleThemeMode} = useglobal();
    
    return(
        <button
            type="button"
            onClick={toggleThemeMode}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
            {darkMode ? <IoSunnyOutline aria-hidden="true" /> : <IoMoonOutline aria-hidden="true" />}
        </button>
    )
}
