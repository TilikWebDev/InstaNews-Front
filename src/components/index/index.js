import './index.scss';

import React from 'react';
import NewsMain from '../news-main/news-main';
import NewsList from '../news-list/news-list';
import NewsRow from '../news-row/news-row';
import NewsCategory from '../news-category/news-category';
import NewsGrid from '../news-grid/news-grid';

const Index = ({news}) => {
    return (
        <div className={'main_content'}>
            <div className={'row main'}>
                <NewsMain data={news.main}/>

                <NewsList data={news.read} datetime={true} title={'Читаемые'}/>
                <NewsList data={news.popular} datetime={true} title={'Популярные'}/>
            </div>

            <NewsRow data={news.discussed} title={'Обсуждаемые'}/>

            <NewsCategory name={'Политика'} link={'polytics'} color={'#ff3939'} data={news.polytics}/>
            <NewsCategory name={'Экономика'} link={'economics'} color={'#3398dc'} data={news.economics}/>
            <NewsCategory name={'Общество'} link={'society'} color={'#2dcc70'} data={news.society}/>

            <NewsGrid name={'Киевские новости'} link={'kiev'} color={'#ffc362'} data={news.kiev}/>
        </div>
    )
}

export default React.memo(Index);