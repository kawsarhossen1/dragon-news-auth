import React from 'react';
import SocialLog from './SocialLog';
import FindUs from './FindUs';

const RightNav = () => {
    return (
        <div className='space-y-5'>
            <SocialLog></SocialLog>
            <FindUs></FindUs>
        </div>
    );
};

export default RightNav;