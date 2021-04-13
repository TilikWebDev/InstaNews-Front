import React from 'react';
import { NavLink } from 'react-router-dom';
import { transformDateTime } from '../../assets/helpers';
import NewsTitle from '../common/news-title/news-title';

import './news-list.scss';

const NewsList = ({data = [], datetime, title, link}) => {
    return (
        <div className={'list col'}>
            {
                title &&
                    <NewsTitle title={title} />
            }

            {
                data.length &&
                    data.map((n, i) => 
                        <div key={i} className={'news_row'}>
                            <NavLink to={`/news?id=${n.ID}`} className={'title'}>
                                { n.TITLE }
                            </NavLink>
                            {
                                datetime &&
                                    <span className={'date'}>
                                        { transformDateTime(n.DATETIME) }
                                    </span>
                            }
                        </div>
                    )
            }
            
        </div>
    );
}

export default React.memo(NewsList);