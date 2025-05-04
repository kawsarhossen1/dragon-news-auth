import React from 'react';
import swimming from '../assets/swimming.png';
import classImg from '../assets/class.png';
import playground from '../assets/playground.png';

const QZone = () => {
    return (
        <div className="bg-[#F3F3F3] p-4 rounded-md mt-6">
            <h2 className="text-xl font-semibold mb-4 text-center">Q-Zone</h2>
            <div className=" flex flex-col justify-center items-center">
                <img src={swimming} alt="Swimming" className="rounded-lg" />
                <img src={classImg} alt="Class" className="rounded-lg" />
                <img src={playground} alt="Playground" className="rounded-lg" />
            </div>
            <p className='text-center font-bold mt-5'>You ads publish please contact  <span className='text-blue-600'>KAWSAR HOSSEN</span></p>
        </div>
    );
};

export default QZone;
