import './news-grid.scss';

import React from 'react';
import { NavLink } from 'react-router-dom';
import Preloader from '../common/preloader/preloader';

const NewsGrid = ({name, link, color, data}) => {
    return (
        <div className={'news_grid'}>
            <h1 className={'default_header'} style={{borderTop: `3px solid ${color}`}}>
                {name}
			</h1>

            <div className={'news_grid__body'}>
                {
                    data ?
                        data.map((n, i) => {
                            let style = {
                                backgroundImage: `url(https://instanews.com.ua/${n.IMG})`,
                            }

                            return (
                                <NavLink key={i} to={`/news?id=${n.ID}`} className="news_grid__cld">
                                    <div className={'img'} style={style}></div>
                                    {n.TITLE}
                                </NavLink>
                            )
                        })
                        :
                        <Preloader margin={'0 15px'}/>
                }
            </div>
        </div>
    )
}

export default React.memo(NewsGrid);