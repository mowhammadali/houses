import React , { useContext } from 'react';
import { routes , route } from "react-router-dom";

// import context
import { ThemeContext } from "./Context/Theme";

// pages
import Home from './Pages/Home';

// components
import Nav from './Components/Nav';

const App = () => {
    // use context
    const {mode} = useContext(ThemeContext);

    return (
        <div className={mode}>
            <Nav />
        </div>
    );
};

export default App;