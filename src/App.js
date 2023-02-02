import React , { useContext } from 'react';
import { Routes, Route } from "react-router-dom";

// pages
import Home from './Pages/Home';
import Register from "./Pages/Register";
import Login from './Pages/Login';

// components
import Nav from './Components/Nav';

const App = () => {
    return (
        <div>
            <Nav />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/register' element={<Register />}/>
                <Route path='/login' element={<Login />}/>
            </Routes>
        </div>
    );
};

export default App;