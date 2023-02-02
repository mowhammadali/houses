import React , { useEffect, useState } from 'react';

export const ThemeContext = React.createContext();

const Theme = ({children}) => {
    const [mode , setMode] = useState(
        localStorage.getItem('mode') || 'light'
    );

    const modeHandler = () => {
        mode === 'light' ? setMode('dark') : setMode('light');
    }

    useEffect(() => {
        localStorage.setItem('mode' , mode);
        document.documentElement.className = mode;
    } , [mode])

    return (
        <ThemeContext.Provider value={{mode , modeHandler}}>
                {children}
        </ThemeContext.Provider>
    );
};

export default Theme;