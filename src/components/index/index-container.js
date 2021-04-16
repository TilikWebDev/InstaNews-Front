import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Index from '.';
import {getMainNews, getByCategory} from '../../redux/index-reducer';

const IndexContainer = ({getMainNews, getByCategory, news}) => {
    useEffect(() => {
        getMainNews();

        getByCategory('read');
        getByCategory('popular');
        getByCategory('discussed');

        getByCategory('polytics');
        getByCategory('economics');
        getByCategory('society');
        getByCategory('kiev', 12);
    }, [getMainNews])

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
        }
    }
};

export default connect(mapStateToProps, {
    getMainNews,
    getByCategory
})(IndexContainer);