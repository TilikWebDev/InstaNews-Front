import './news.scss';

import React from 'react';
import { NavLink } from 'react-router-dom';

const News = ({type, data}) => {
    let style = {
        backgroundImage: `url(https://instanews.com.ua/${data.IMG})`,
    }

    return <NavLink to={`/news?id=${data.ID}`} className={`news __${type}`} style={style}>
        
        {
            (type !== 'row') &&
                <div className="title">
                    {data.TITLE}
                </div>
        }

        <div className="text">
            {
                data.TEXT?.length > 150 ? `${data.TEXT.substr(0, 147)}...` : data.TEXT
            }
        </div>
    </NavLink>;
}

export default React.memo(News);