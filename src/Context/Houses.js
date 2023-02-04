import React, { useEffect, useState } from 'react';
import axios from 'axios';

// export context
export const HouseContext = React.createContext();

const Houses = ({children}) => {
    // use state
    const [houses , setHouse] = useState([]);
    const [loading , setLoading] = useState(true);
    const [error , setError] = useState('');
    const [updateData , setUpdateData] = useState(false);

    // useEffect
    useEffect(() => {
        const getHouses = async () => {
            await axios.get("http://localhost:3004/comments")
            .then(res => {
                setHouse(res.data);
                setLoading(false);
                setError('');
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
                setHouse([]);
                setLoading(true);
                setError(err.message);
            })
        }
        getHouses();
    } , [updateData])

    return (
        <HouseContext.Provider value={{houses , loading , error , updateData , setUpdateData}}>
            {children}
        </HouseContext.Provider>
    );
};

export default Houses;