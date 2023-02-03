import React , { useContext } from 'react';
import { NavLink } from 'react-router-dom';

// icons
import { MdDashboard } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import { FaPowerOff } from 'react-icons/fa';
import { FaRegWindowClose } from 'react-icons/fa';

// import context
import { UsersContext } from '../Context/Users';

const SideBar = ({show , setShow}) => {
    // use context
    const { setLoggedIn } = useContext(UsersContext);

    // exit dashboard
    const exitHandler = () => {
        setLoggedIn(false);
    }

    return (
        <aside className={`absolute w-[280px] h-full bg-slate-300
        flex flex-col items-center gap-y-12 px-4 dark:bg-zinc-700
        ${show ? "translate-x-0" : "translate-x-[100%]"} transition-transform
        duration-1000 ease-in-out shadow-md
        sm:static sm:translate-x-0`}>
            <FaRegWindowClose className='text-3xl self-end mt-2 cursor-pointer sm:hidden'
            onClick={() => setShow(!show)}/>
            <h1 className='mt-2 text-2xl font-bold sm:mt-12'>حساب کاربری</h1>
            <ul className='flex flex-col items-center gap-y-10 w-full'>
                <li className='w-full'>
                    <NavLink className={`flex items-center justify-center py-2
                    rounded-xl gap-x-2 w-full bg-slate-400`} to="/dashboard">
                        <MdDashboard />
                        <p>داشبورد</p>
                    </NavLink>
                </li>
                <li className='w-full'>
                    <NavLink className="flex items-center justify-center py-2
                    rounded-xl gap-x-2 w-full bg-slate-400" to="/dashboard/ads">
                        <FaEdit />
                        <p>ثبت آگهی</p>
                    </NavLink>
                </li>
                <li className='w-full'>
                    <div className="flex items-center justify-center py-2
                    rounded-xl gap-x-2 w-full cursor-pointer bg-slate-400"
                    onClick={exitHandler}>
                        <FaPowerOff />
                        <p>خروج</p>
                    </div>
                </li>
            </ul>
        </aside>
    );
};

export default SideBar;