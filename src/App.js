import React , { useContext } from 'react';
import { Routes, Route } from "react-router-dom";

// pages
import Home from './Pages/Home';
import Register from "./Pages/Register";
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import User from './Pages/User';
import SetAds from './Pages/SetAds';

// router
import ProtectRouter from "./Router/ProtectRouter";

// import context
import { UsersContext } from './Context/Users';

const App = () => {
    // use context
    const {setLoggedIn , loggedIn , userData} = useContext(UsersContext);
    
    return (
        <div>
            {/* <Nav /> */}
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/register' element={<Register />}/>
                <Route path='/login' element={<Login />}/>
                <Route path='/dashboard' 
                element={
                    <ProtectRouter loggedIn={loggedIn}>
                        <Dashboard loggedIn={loggedIn} setLoggedIn={setLoggedIn} data={userData}/>
                    </ProtectRouter>}
                >
                    <Route index element={<User />}/>
                    <Route path='/dashboard/ads' element={<SetAds />}/>
                </Route>
            </Routes>
        </div>
    );
};

export default App;