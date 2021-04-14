import './index.scss';

import React from 'react';
import News from '../news/news';
import NewsList from '../news-list/news-list';
import NewsRow from '../news-row/news-row';

const Index = ({news}) => {
    return (
        <div className={'main_content'}>
            <div className={'row main'}>
                <News type={'main'} data={news.main}/>

                <NewsList data={news.read} datetime={true} title={'Читаемые'}/>
                <NewsList data={news.popular} datetime={true} title={'Популярные'}/>
            </div>

            <NewsRow data={news.discussed} title={'Обсуждаемые'}/>
        </div>
    )
}

export default React.memo(Index);