import React , { useContext } from 'react';

// components
import Nav from '../Components/Nav';
import Ads from '../Components/Ads';

// import context
import { HouseContext } from '../Context/Houses';

const Home = () => {
    // use context
    const {houses , loading , error} = useContext(HouseContext);

    return (
        <div>
            <Nav />
            <section className='flex flex-wrap items-center justify-center
            gap-x-12 gap-y-12 my-10 px-12'>
                {
                    error
                    ? <h1 className='px-6 py-2 rounded-2xl text-sm
                    bg-red-500'>{error}</h1>
                    :
                    loading 
                    ? <h1>در حال دریافت اطلاعات...</h1>
                    : 
                    houses.map(house => <Ads key={house.id} {...house}/>)
                }
            </section>
        </div>
    );
};

export default Home;