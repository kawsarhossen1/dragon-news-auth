import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <div className='text-start flex gap-2 items-center bg-base-200 p-2'>
            <p className='bg-[#D72050] font-bold rounded-md text-white px-3 py-1'>Latest</p>
            <Marquee pauseOnHover={true} className='space-x-10'>
                <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut natus, iste officia adipisci cumque deserunt nesciunt quod quis, maxime unde, necessitatibus non quasi repellendus earum quo esse voluptatibus pariatur expedita?</Link>
                <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut natus, iste officia adipisci cumque deserunt nesciunt quod quis, maxime unde, necessitatibus non quasi repellendus earum quo esse voluptatibus pariatur expedita?</Link>
                <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut natus, iste officia adipisci cumque deserunt nesciunt quod quis, maxime unde, necessitatibus non quasi repellendus earum quo esse voluptatibus pariatur expedita?</Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;