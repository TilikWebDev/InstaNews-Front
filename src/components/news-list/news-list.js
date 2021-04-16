import React from 'react';
import { NavLink } from 'react-router-dom';
import { transformDateTime } from '../../assets/helpers';
import Preloader from '../common/preloader/preloader';

import './news-list.scss';

const NewsList = ({data, datetime, title, link}) => {
    return (
        <div className={'news_list'}>
            {
                title ?
                    <h1 className={'default_title'}>
                        {title}
                    </h1>
                    :
                    <div></div>
            }

            <div className={'news_list__body'}>
                {
                    
                    data ?
                        data.map((n, i) => 
                                <div key={i} className={'news_list__cld'}>
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
                        :
                        <Preloader/>
                }

                {
                    link &&
                        <NavLink to={`/category?name=${link}`} className={'last_link'}>
                            Читать еще...
                        </NavLink>  
                }
            </div>
        </div>
    );
}

export default React.memo(NewsList);