import './category.scss';

import React from 'react';
import Preloader from '../common/preloader/preloader';
import { NavLink } from 'react-router-dom';
import { transformDateTime } from '../../assets/helpers';

const Category = ({is_loading, link, name, data}) => {
    return (
        <div className={'main_content container category_news'}>
            <h1 class="category__title">
                { name }
            </h1>

            <div className={'category_news__body'}>
                {
                    !is_loading ?
                        data.map((n, i) => {
                            let style = {
                                backgroundImage: `url(https://instanews.com.ua/${n.IMG})`,
                            }
                            
                            return (
                                <div className={'category_news__cld'}>
                                    <a className={'img'} style={style}>                                
                                        <div className={'date'}>
                                            <i className={'fa fa-calendar'}></i>
                                            {
                                                transformDateTime(n.DATETIME)
                                            }
                                        </div>
                                    </a>

                                    <NavLink to={`/news?id=${n.id}`} className={'info'}>
                                        <h1 className={'title'}>
                                            { n.TITLE.length > 150 ? `${n.TITLE.substr(0, 147)}...` : n.TITLE }
                                        </h1>

                                        <div className={'text'}>
                                            { n.TEXT.length > 250 ? `${n.TEXT.substr(0, 247)}...` : n.TEXT }
                                        </div>
                                    </NavLink>	
                                </div>
                            )
                        })
                    :
                    <Preloader/>
                }
            </div>

            <div className={'category_news__bar'}>

            </div>
        </div>
    )
}

export default React.memo(Category);