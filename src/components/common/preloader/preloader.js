import './preloader.scss';

import React from 'react';

const Preloader = ({margin = '0'}) => {
    return (
        <div className={'preloader_container'} style={{
            margin: margin
        }}>
            <div className={'lds-ring'}><div></div><div></div><div></div><div></div></div>
        </div>
    );
}

export default Preloader;