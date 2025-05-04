import React from 'react';
import SocialLog from './SocialLog';
import FindUs from './FindUs';
import QZone from './QZone';

const RightNav = () => {
    return (
        <div className='space-y-5'>
            <SocialLog></SocialLog>
            <FindUs></FindUs>
            <QZone></QZone>
        </div>
    );
};

export default RightNav;