import React from 'react';
import './news-title.scss';

const NewsTitle = ({title}) => {
    return (
        <h1 className={'default_title'}>
            {title}
        </h1>
    );
}

export default React.memo(NewsTitle);