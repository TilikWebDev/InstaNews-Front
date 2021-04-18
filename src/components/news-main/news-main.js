import './news-main.scss';

import React from 'react';
import { NavLink } from 'react-router-dom';
import Preloader from '../common/preloader/preloader';

const NewsMain = ({data}) => {
    let style = {
        backgroundImage: `url(https://instanews.com.ua/${data.IMG})`,
    }

    return data?.ID ?
        <NavLink to={`/news?id=${data.ID}`} className={`news_main`} style={style}>
            <div className="title">
                {data.TITLE}
            </div>

            <div className="text">
                {
                    data.TEXT?.length > 150 ? `${data.TEXT.substr(0, 147)}...` : data.TEXT
                }
            </div>
        </NavLink>
        :
        <div className={`news_main wpm`}>
            <Preloader margin={'0 0 30px 0'}/>
        </div>
}

export default React.memo(NewsMain);