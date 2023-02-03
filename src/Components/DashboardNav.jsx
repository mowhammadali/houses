import React , { useContext } from 'react';
import { NavLink } from 'react-router-dom';

// icons
import { TiHome } from "react-icons/ti";
import { FaPowerOff } from 'react-icons/fa';
import { BsFillMoonFill  , BsFillSunFill , BsMenuButtonWideFill} from "react-icons/bs";

// import context
import { ThemeContext } from '../Context/Theme';
import { UsersContext } from '../Context/Users';

const DashboardNav = ({show , setShow}) => {
    // use context
    const { mode , modeHandler} = useContext(ThemeContext);
    const { setLoggedIn } = useContext(UsersContext);

    const exitHandler = () => {
        setLoggedIn(false);
    }
    console.log(show);
    return (
        <div className='flex items-center justify-between 
        w-full h-[70px] px-8 shadow-lg sm:px-16'>
            <div className='flex items-center gap-x-6'>
                <NavLink className='flex items-center gap-x-1 text-2xl' 
                to="/">
                    <TiHome />
                    <p className='text-xl'>خانه</p>
                </NavLink>
                {
                    mode === 'light'
                    ? <BsFillMoonFill className='text-2xl cursor-pointer text-slate-500' 
                    onClick={modeHandler}/>
                    : <BsFillSunFill className='text-2xl cursor-pointer text-amber-600'
                    onClick={modeHandler}/>
                }
            </div>
            <div className='flex items-center gap-x-6'>
                <BsMenuButtonWideFill className='text-2xl cursor-pointer sm:hidden'
                onClick={() => setShow(!show)}/>
                <section className='flex items-center gap-x-1 text-2xl cursor-pointer'
                onClick={exitHandler}>
                    <FaPowerOff />
                    <p className='text-xl'>خروج</p>
                </section>
            </div>
        </div>
    );
};

export default DashboardNav;