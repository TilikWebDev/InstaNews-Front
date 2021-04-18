import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Category from './category';

import { setIsLoadingStatus, getCategoryNews, getNewsRead, getNewsPopular, getNewsDiscussed } from '../../redux/category-reducer';
import { useParams } from 'react-router';
import { convertCategoryToValidate } from '../../assets/helpers';

const CategoryContainer = ({setIsLoadingStatus, getCategoryNews, getNewsRead, getNewsPopular, getNewsDiscussed, is_loading, range, max_qty, all_qty, page, link, name, data}) => {
    const _name = convertCategoryToValidate(useParams().name);

    useEffect(() => {
        setIsLoadingStatus(true);

        switch (_name.link) {
            case 'read':
                getNewsRead(_name, range, max_qty, page);
                break;

            case 'popular':
                getNewsPopular(_name, range, max_qty, page);
                break;

            case 'discussed':
                getNewsDiscussed(_name, range, max_qty, page);
                break;
            
            default:
                getCategoryNews(_name, max_qty, page);
                break;
        }
    }, [_name.link]);

    return (
        <Category is_loading={is_loading} page={page} link={link} name={name} data={data} />
    )
}

const mapStateToProps = (state) => {
    return {
        is_loading: state.categoryReducer.is_loading,
        range: state.categoryReducer.range,
        max_qty: state.categoryReducer.max_qty,
        all_qty: state.categoryReducer.all_qty,
        page: state.categoryReducer.page,
        link: state.categoryReducer.link,
        name: state.categoryReducer.name,
        data: state.categoryReducer.data
    }
};

export default connect(mapStateToProps, {
    setIsLoadingStatus, getNewsRead, getNewsPopular, getNewsDiscussed, getCategoryNews,
})(CategoryContainer);