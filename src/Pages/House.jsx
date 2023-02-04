import React , { useContext } from 'react';
import { useParams } from 'react-router-dom';

// icons
import { GiSpookyHouse } from "react-icons/gi";

// import context
import { HouseContext } from '../Context/Houses';

const House = () => {
    // use params
    const params = useParams();

    // use context
    const { houses } = useContext(HouseContext);

    const filtereddItem = houses.find(house => house.id === +params.id);

    return (
        <div className='flex items-center justify-center p-8'>
            <div className='flex flex-col items-center gap-y-4
            mt-12 p-6 shadow-md'>
                <GiSpookyHouse className='text-[90px]'/>
                <h1></h1>
            </div>
        </div>
    );
};

export default House;