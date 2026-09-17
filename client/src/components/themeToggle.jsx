import { Moon, Sun } from "lucide-react"
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
            {darkMode ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
        </button>
    )
}
