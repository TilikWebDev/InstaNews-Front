import './news-columns.scss';

import React from 'react';
import Preloader from '../common/preloader/preloader';
import NewsList from '../news-list/news-list';

const NewsColumns = ({data}) => {
    return (
        <div className={'news_columns'}>
            {
                data ?
                    data.map((n, i) => 
                        <div key={i} className={'news_columns__cld'}>
                            <h1 className={'default_header'} style={{borderTop: `3px solid ${n.color}`}}>
                                {n.name}
                            </h1>

                            <NewsList data={n.data} link={n.link}/>
                        </div>
                    )
                    :
                    <Preloader/>
            }           
        </div>
    );
}

export default React.memo(NewsColumns);