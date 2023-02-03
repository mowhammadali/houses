import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectRouter = ({loggedIn , children}) => {
    if(!loggedIn){
        return <Navigate to='/'/>
    }
    else{
        return children;
    }
};

export default ProtectRouter;