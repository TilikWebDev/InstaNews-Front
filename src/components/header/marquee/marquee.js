import React from 'react';

import './marquee.scss';
import Ticker from './ticker';

const Marquee = ({marqueeData}) => {
    const getCurrentDate = () => {
        const today = new Date();  
        return `${String(today.getDate()).padStart(2, '0')}.${String(today.getMonth() + 1).padStart(2, '0')}.${today.getFullYear()}`;
    }

    return (
        <div className={'marquee'}>
            <div className={'datetime'}>
                {
                    getCurrentDate()
                }
            </div>

            <Ticker marqueeData={marqueeData}/>

            <select className={'lang_selector'}>
                <option value={'RUS'}>RUS</option>
                <option value={'UKR'}>UKR</option>
                <option value={'ENG'}>ENG</option>
            </select>
        </div>
    )
}

export default React.memo(Marquee);