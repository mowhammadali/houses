import React , { useContext } from 'react';

// icons
import { HiUserCircle } from 'react-icons/hi';

// import context
import { UsersContext } from '../Context/Users'; 

const User = () => {
    // use context
    const { userData } = useContext(UsersContext);

    return (
        <div className='flex flex-col items-center gap-y-4
        p-6 shadow-lg w-fit mt-12 rounded-lg bg-gray-300 dark:bg-gray-700'>
            <HiUserCircle className='text-[80px]'/>
            <p>نام: {userData.name}</p>
            <p>ایمیل: {userData.email}</p>
        </div>
    );
};

export default User;