import React from 'react';
import { useNavigate , Navigate} from 'react-router-dom';

const ProtectRouter = ({loggedIn , children}) => {
    const navigate = useNavigate();
    if(!loggedIn){
        return <Navigate to='/'/>
    }
    else{
        return children;
    }
};

export default ProtectRouter;