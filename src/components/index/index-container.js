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
            discussed: state.indexReducer.discussed
        }
    }
};

export default connect(mapStateToProps, {
    getMainNews,
    getByCategory
})(IndexContainer);