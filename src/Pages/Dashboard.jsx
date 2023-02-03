import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

// components
import SideBar from '../Components/SideBar';
import DashboardNav from '../Components/DashboardNav';

const Dashboard = ({data}) => {
    const [show , setShow] = useState(false);
    return (
        <div className='flex items-center w-full 
        h-screen relative'>
            <SideBar show={show} setShow={setShow}/>
            <section className='flex flex-col items-center 
            w-full h-full'>
                <DashboardNav show={show} setShow={setShow}/>
                <Outlet data={data}/>
            </section>
        </div>
    );
};

export default Dashboard;