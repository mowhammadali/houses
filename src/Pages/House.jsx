import React , { useContext, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';

// icons
import { GiSpookyHouse } from "react-icons/gi";
import { BsFillMoonFill  , BsFillSunFill} from "react-icons/bs";

// import context
import { HouseContext } from '../Context/Houses';
import { ThemeContext } from '../Context/Theme';

// components
import Modal from '../Components/Modal';

const House = () => {
    // use state
    const [modal , setModal] = useState(false);

    // use params
    const params = useParams();

    // use context
    const { houses } = useContext(HouseContext);
    const { mode , modeHandler } = useContext(ThemeContext);

    const filteredItem = houses.find(house => house.id === +params.id);
    const { tel , address , description} = filteredItem;

    return (
        <>
            <div className='flex items-center justify-center p-8'>
                <div className='flex flex-col items-center gap-y-4 relative
                mt-12 p-6 shadow-md bg-gray-300 dark:bg-zinc-700'>
                    <GiSpookyHouse className='text-[90px]'/>
                    <h1>شماره تماس: {tel}</h1>
                    <h1>موقعیت: {address}</h1>
                    <h1>
                        توضیحات: {description}
                    </h1>
                    <div className='flex items-center gap-x-6'>
                        <button className='ads-btn'
                        onClick={() => setModal(true)}>
                            حذف
                        </button>
                        <NavLink className="ads-btn" to="/">بازگشت</NavLink>
                    </div>
                    <div className='bg-transparent absolute top-3 right-3'>
                        {
                            mode === 'light'
                            ? 
                            <BsFillMoonFill className='text-slate-500 text-2xl cursor-pointer'
                            onClick={modeHandler}/>
                            :
                            <BsFillSunFill className='text-amber-600 text-2xl cursor-pointer'
                            onClick={modeHandler}/>
                        }
                    </div>
                </div>
                <Modal modal={modal} setModal={setModal} id={params.id}/>
            </div>
        </>
    );
};

export default House;