import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5"
import { useglobal } from "../context/globalContext"

export default function ThemeToggle(){
    const {darkMode,toggleThemeMode} = useglobal();
    
    return(
        <button onClick={toggleThemeMode}>
            {darkMode ? <IoSunnyOutline /> : <IoMoonOutline />}
        </button>
    )
}
