import React , { useContext } from 'react';
import { NavLink } from 'react-router-dom';

// import context
import { ThemeContext } from '../Context/Theme';
import { UsersContext } from '../Context/Users';

// icons
import { BsFillMoonFill  , BsFillSunFill} from "react-icons/bs";

const Nav = () => {
    // use context
    const {mode , modeHandler} = useContext(ThemeContext);
    const {loggedIn} = useContext(UsersContext);


    return (
        <div className='w-full h-20 px-12 shadow-lg flex 
        justify-between items-center text-lg font-bold'>
            <section>
                <NavLink className='select-none' to="/">خانه</NavLink>
            </section>
            <section className='flex items-center gap-x-10'>
                {
                    mode === 'light'
                    ? <BsFillMoonFill onClick={modeHandler} 
                    className='text-slate-500 text-2xl cursor-pointer'/>
                    : <BsFillSunFill onClick={modeHandler} 
                    className='text-amber-600 text-2xl cursor-pointer'/>
                }
                {
                    loggedIn 
                    ?  <NavLink className='select-none' to="/dashboard">حساب کاربری</NavLink>
                    : <NavLink className='select-none' to="/login">ورود / ثبت نام</NavLink>
                }
            </section>
        </div>
    );
};

export default Nav;