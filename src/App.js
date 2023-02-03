import React , { useContext } from 'react';
import { Routes, Route } from "react-router-dom";

// pages
import Home from './Pages/Home';
import Register from "./Pages/Register";
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';

// components
import Nav from './Components/Nav';

// router
import ProtectRouter from "./Router/ProtectRouter";

// import context
import { UsersContext } from './Context/Users';

const App = () => {
    // use context
    const {loggedIn , setLoggedIn} = useContext(UsersContext);
    
    return (
        <div>
            <Nav />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/register' element={<Register />}/>
                <Route path='/login' element={<Login />}/>
                <Route path='/dashboard' 
                element={
                    <ProtectRouter loggedIn={loggedIn}>
                        <Dashboard loggedIn={loggedIn}/>
                    </ProtectRouter>}
                />
            </Routes>
        </div>
    );
};

export default App;