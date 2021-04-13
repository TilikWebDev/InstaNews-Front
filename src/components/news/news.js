import './news.scss';

import React from 'react';
import { NavLink } from 'react-router-dom';

const News = ({type, data}) => {
    let style = {
        backgroundImage: `url(https://instanews.com.ua/${data.IMG})`,
    }

    return <NavLink to={`/news?id=${data.ID}`} className={`news ${type}`} style={style}>
        <div className="title">
            {data.TITLE}
        </div>

        <div className="text">
            {data.TEXT}
        </div>
    </NavLink>;
}

export default React.memo(News);