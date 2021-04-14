import React from 'react';
import NewsTitle from '../common/news-title/news-title';
import News from '../news/news';

const NewsRow = ({data, title}) => {
    return (
        <div className={'row sb'}>
            <NewsTitle title={title}/>
        
            {
                data?.length &&
                    data.map((n, i) => <News key={i} data={n} type={'row'}/>
                    )
            }
        </div>
    );
}

export default React.memo(NewsRow);