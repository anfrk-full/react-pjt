import { useState } from "react";
import MainContent from "./MainContent";
import ThemContext from "./ThemeContext";

function DarkOrLight() {
    const [theme, setTheme] = useState('dark');
    const themeHandler = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }
    return (
        <ThemContext.Provider value={{ theme, themeHandler }}>
            <MainContent />
        </ThemContext.Provider>
    );
}

export default DarkOrLight;