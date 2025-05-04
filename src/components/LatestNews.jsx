import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/news/category/01')
            .then(res => res.json())
            .then(data => {
                if (data?.status && Array.isArray(data.data)) {
                    setNews(data.data);
                }
            })
            .catch(err => console.error('Error fetching news:', err));
    }, []);

    return (
        <div className='text-start flex gap-2 items-center bg-base-200 p-2'>
            <p className='bg-[#D72050] font-bold rounded-md text-white px-3 py-1'>Latest</p>
            <Marquee pauseOnHover={true} className='space-x-10'>
                {
                    news.map(item => (
                        <Link key={item._id} to={`/news/${item._id}`} className='mx-5 font-medium'>
                            {item.title}
                        </Link>
                    ))
                }
            </Marquee>
        </div>
    );
};

export default LatestNews;
