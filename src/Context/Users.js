import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const UsersContext = React.createContext();

const Users = ({children}) => {
    // use state
    const [users , setUsers] = useState([])
    const [validate , setValidate] = useState(false);
    const [loggedIn , setLoggedIn] = useState(
        sessionStorage.getItem('login') || false
    );

    useEffect(() => {
        const getUsers = async () => {
            axios.get('http://localhost:3004/posts')
            .then(res => {
                setUsers([...res.data]);
                console.log(res);
            })
            .catch(err => console.log(err))
        }
        getUsers();
    } , [validate])

    return (
        <UsersContext.Provider value={{users , validate , setValidate , loggedIn , setLoggedIn}}>
            {children}
        </UsersContext.Provider>
    );
};


export default Users;