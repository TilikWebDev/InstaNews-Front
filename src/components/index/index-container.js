import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Index from '.';
import {getMainNews, getNewsRead, getNewsPopular, getNewsDiscussed, getByCategory} from '../../redux/index-reducer';

const IndexContainer = ({getMainNews, getNewsRead, getNewsPopular, getNewsDiscussed, getByCategory, news}) => {
    useEffect(() => {
        getMainNews();

        getNewsRead();
        getNewsPopular();
        getNewsDiscussed();

        getByCategory('polytics');
        getByCategory('economics');
        getByCategory('society');
        getByCategory('kiev', 12);
        getByCategory('science');
        getByCategory('sport');
        getByCategory('showbusiness');
    }, [getMainNews, getByCategory])

    return (
        <Index news={news}/>
    )
};

const mapStateToProps = (state) => {
    return {
        news: {
            main: state.indexReducer.main,
            read: state.indexReducer.read,
            popular: state.indexReducer.popular,
            discussed: state.indexReducer.discussed,
            polytics: state.indexReducer.polytics,
            economics: state.indexReducer.economics,
            society: state.indexReducer.society,
            kiev: state.indexReducer.kiev,
            sss: [
                {
                    name: 'Наука',
                    link: 'science',
                    color: '#bec3c7',
                    data: state.indexReducer.science
                },
                {
                    name: 'Спорт',
                    link: 'sport',
                    color: '#4f6276',
                    data: state.indexReducer.sport
                },
                {
                    name: 'Шоу-бизнес',
                    link: 'showbusiness',
                    color: '#c463eb',
                    data: state.indexReducer.showbusiness
                }
            ]
        }
    }
};

export default connect(mapStateToProps, {
    getMainNews,
    getNewsRead,
    getNewsPopular,
    getNewsDiscussed,
    getByCategory
})(IndexContainer);