import './news-category.scss';

import React from 'react';
import { NavLink } from 'react-router-dom';
import { transformDateTime } from '../../assets/helpers';
import NewsList from '../news-list/news-list';
import Preloader from '../common/preloader/preloader';

const News = ({data, category, category_link}) => {
    let style = {
        backgroundImage: `url(https://instanews.com.ua/${data.IMG})`,
    }

    return (
        <div className={'news_category__cld'}>
            <NavLink to={`/news?id=${data.ID}`} className={'img'} style={style}>
            </NavLink>
            
            <NavLink to={`/news?id=${data.ID}`} className={'title'}>
                {data.TITLE}
            </NavLink>

            <div className={'footer'}>
                <span className={'date'}>
                    <i className={'fa fa-clock-o'} aria-hidden={true}></i>
                    {
                        transformDateTime(data.DATETIME)
                    }
                </span>
                
                <span>
                    <i className={'fa fa-bookmark-o'} aria-hidden={true}></i>

                    <NavLink to={`/category?name=${category_link}`} className={'category'}>
                        { category }
                    </NavLink>
                </span>
            </div>
        </div>
    );
}

const NewsCategory = ({name, link, color, data}) => {
    return (
        <div className={'news_category'}>
            <h1 className={'default_header'} style={{borderTop: `3px solid ${color}`}}>
                {name}
			</h1>

            <div className={'news_category__body'}>
                {
                    data ? <News data={data[0]} category={name} category_link={link}/> : <Preloader margin={'0 0 30px 0'}/>
                }

                {
                    data && 
                        <NewsList data={[...data.splice(1)]} link={link}/>
                }
            </div>
        </div>
    );
}

export default React.memo(NewsCategory);