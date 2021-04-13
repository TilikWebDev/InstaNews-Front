import React, { useEffect, useRef, useState } from 'react';

const Ticker = ({marqueeData}) => {
    const marquee = useRef();
    const [animation, setAnimation] = useState({});

    useEffect(() => {
        if (marquee && marqueeData.length) {
            const marqueeLength = marquee.current.clientWidth * 1.5;
            const marqueeTravelTime = Math.ceil( marqueeLength / 100 );

            setAnimation({
                animation: `${marqueeTravelTime}s linear 0s infinite normal none running scrollLeft`,
            });
        }
    }, [marquee, marqueeData]);

    return (
        <div ref={marquee} className={'ticker'} style={animation}>
            {
                marqueeData?.map((d, i) => 
                    <span key={i}>
                        {`${d}.`}
                    </span>
                )
            }
        </div>
    );
}

export default React.memo(Ticker);