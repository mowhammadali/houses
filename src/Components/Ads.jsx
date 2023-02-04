import React from 'react';
import { NavLink } from 'react-router-dom';

// icons
import { GiSpookyHouse } from "react-icons/gi";

const Ads = (props) => {
    const {tel , address , description , id} = props;
    
    return (
        <div className='flex flex-col items-center gap-y-6 
        w-[250px] h-auto p-6 shadow-md bg-gray-300
        dark:bg-zinc-700 rounded-xl'>
            <GiSpookyHouse className='text-[70px]'/>
            <h1>موقعیت: {address}</h1>
            <h1>شماره تماس: {tel}</h1>
            <p>توضیحات: ...</p>
            <NavLink className="ads-btn" to={`/house/${id}`}>نمایش</NavLink>
        </div>
    );
};

export default Ads;