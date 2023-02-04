import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const UsersContext = React.createContext();

const Users = ({children}) => {
    // use state
    const [users , setUsers] = useState([])
    const [validate , setValidate] = useState(false);
    const [loggedIn , setLoggedIn] = useState(
        JSON.parse(sessionStorage.getItem('login')) || false
    );
    const [userData , setUserData] = useState(
        JSON.parse(sessionStorage.getItem('userData')) || {}
    )

    // useEffects
    useEffect(() => {
        const getUsers = async () => {
            await axios.get('http://localhost:3004/posts')
            .then(res => {
                setUsers([...res.data]);
                console.log(res);
            })
            .catch(err => {
                setUsers([]);
            })
        }
        getUsers();
    } , [validate])

    useEffect(() => {
        sessionStorage.setItem('login' , loggedIn);
    } , [loggedIn])

    useEffect(() => {
        sessionStorage.setItem('userData' , JSON.stringify(userData));
    } , [userData])

    return (
        <UsersContext.Provider value={{users , validate , setValidate , loggedIn , setLoggedIn , userData , setUserData}}>
            {children}
        </UsersContext.Provider>
    );
};


export default Users;