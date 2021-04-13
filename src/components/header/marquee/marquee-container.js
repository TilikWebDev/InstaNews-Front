import React from 'react';
import { useSelector } from 'react-redux';
import Marquee from './marquee';

const MarqueeContainer = () => {
    const data = useSelector((state) => state.headerReducer.marqueeData)

    return <Marquee
        marqueeData={data}
    />
}

export default MarqueeContainer;