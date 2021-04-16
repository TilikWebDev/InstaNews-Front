import './news-row.scss';

import React from 'react';
import { NavLink } from 'react-router-dom';
import Preloader from '../common/preloader/preloader';

const News = ({data}) => {
    let style = {
        backgroundImage: `url(https://instanews.com.ua/${data.IMG})`,
    }

    return <NavLink to={`/news?id=${data.ID}`} className={`news_row__cld`} style={style}>
        <div className="text">
            {
                data.TEXT?.length > 150 ? `${data.TEXT.substr(0, 147)}...` : data.TEXT
            }
        </div>
    </NavLink>;
}

const NewsRow = ({data, title}) => {
    return (
        <div className={'news_row'}>
            <h1 className={'default_title'}>
                {title}
            </h1>
        
            <div className={'news_row__body'}>
                {
                    data ?
                        data.map((n, i) => <News key={i} data={n}/>)
                        :
                        <Preloader margin={'0 0 30px 0'}/>
                }
            </div>
        </div>
    );
}

export default React.memo(NewsRow);